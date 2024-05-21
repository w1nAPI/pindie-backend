const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  createCategory,
  findCategoryById,
} = require("../middlewares/categories");
const {
  sendCategoryCreated,
  sendCategoryById,
} = require("../controllers/categories");

categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
module.exports = categoriesRouter;
