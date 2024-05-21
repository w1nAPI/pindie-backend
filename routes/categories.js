const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  createCategory,
} = require("../middlewares/categories");
const sendCategoryCreated = require("../controllers/categories");

categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated
);
module.exports = categoriesRouter;
