const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const StockModel = require("../models").Stock;


// CREATE A NEW STOCK
router.post("/", async (req, res) => {
    let stock = await StockModel.create(req.body);
    res.json({ stock });
  });

// GET STOCK PROFILE
router.get("/:id", async (req, res) => {
    let stock = await StockModel.findByPk(req.params.id);
    res.json({ stock });
  });

// DELETE STOCK
router.delete("/:id", async (req, res) => {
    let stock = await StockModel.findByPk(req.params.id);
    await StockModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `${stock.ticker} did not give us the gains we were looking for.`,
    });
  });

// UPDATE STOCK VALUE
router.put("/:id", async(req,res) =>{
  let stock = await StockModel.update(req.body,{
    where: {id: req.params.id},
    returning:true
  });
  res.json({ stock});
})

module.exports = router;