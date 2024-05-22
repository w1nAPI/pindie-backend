const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
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
  checkEmptyName,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);
module.exports = categoriesRouter;
