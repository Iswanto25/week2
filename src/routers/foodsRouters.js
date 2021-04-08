const foodsRouters = require("express").Router();
const foodsControllers = require("../controllers/foodsControllers");
const foodControllers = require("../controllers/foodsControllers");
const foods = require("../models/foods");

foodsRouters.get("/", foodControllers.getAllfoods);
foodsRouters.post("/", foodsControllers.postfoods);
foodsRouters.get("/:id", foodsControllers.getDataByid);
foodsRouters.delete("/:id", foodsControllers.deleteDataByid);
foodsRouters.put("/:id", foodsControllers.upDateByid);

module.exports = foodsRouters;