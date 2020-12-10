const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const StockModel = require("../models").Stock;
const UserStockModel = require("../models").UserStock;


// CREATE A NEW User-Stock Connection
router.post("/profile/:id", async (req, res) => {
    let newStock = await StockModel.findOrCreate({
        where: {ticker: req.body.ticker},
    });
    let UserStock = await UserStockModel.create({
        userId: req.params.id,
        stockId: newStock[0].id
    });
    res.json({ UserStock});
  });


//GET ALL USER STOCK CONNECTION
router.get("/profile/:id", async (req, res) => {
    let connections = await UserStockModel.findAll({
        where: {userId: req.params.id},
        attributes:['stockId']
    });
    let stocks = []
    for(i=0; i<connections.length; i++){
        let stockid = await StockModel.findByPk(connections[i].stockId)
        if(stockid != null){
            stocks.push(stockid)
        }
    }
    res.json({stocks});
});

// DELETE A USER STOCK CONNECTION
router.delete("/profile/:id", async (req, res) => {
    await UserStockModel.destroy({
      where: {
          userId: req.params.id,
          stockId: req.body.stockId
        }
    });
    res.json({
      message: `Stock Connection with id ${req.params.id} was deleted`
    });
  });



module.exports = router;