const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const StockModel = require("../models").Stock;
const UserStockModel = require("../models").UserStock;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id, {
    include: [{
      model: StockModel,
      as: 'stocks',
      required: false,
      attributes:['ticker','currentValue','createdAt','updatedAt'],
      through: {
        model:UserStockModel,
        as: 'userStocks',
      }
    }]});
  res.json({ user });
});

// GET ALLL USERS PROFILES
router.get("/", async (req, res) => {
  let allUsers = await UserModel.findAll({
    order: [
      ["growth", "ASC"],
    ],
    include: [{
      model: StockModel,
      as: 'stocks',
      required: false,
      attributes:['ticker','currentValue','createdAt','updatedAt'],
      through: {
        model:UserStockModel,
        as: 'userStocks',
      }
    }],
  });
  res.json({ allUsers });
});

//GET USER STOCKS
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


//GET TOP TEN USER PRODILES






// CREATE A NEW USER
router.post("/", async (req, res) => {
  let user = await UserModel.create(req.body);
  res.json({ user });
});

// UPDATE A USER
router.put("/:id", async (req, res) => {
  let user = await UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ user });
});

// DELETE A USER
router.delete("/:id", async (req, res) => {
  await UserModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `User with id ${req.params.id} will no longer be stonking`,
  });
});

module.exports = router;
