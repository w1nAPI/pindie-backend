const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  checkIsCategoryExists,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);
module.exports = categoriesRouter;
