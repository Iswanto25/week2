const mainRouters = require("express").Router();
const foodsRouters = require("./foodsRouters");

mainRouters.use("/foods", foodsRouters);

module.exports = mainRouters;