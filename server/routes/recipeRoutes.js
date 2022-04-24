const express = require("express");
const RecipeController = require("../controllers/recipeController");

const router = express.Router();

router.get('/', RecipeController.Home);

module.exports = router;