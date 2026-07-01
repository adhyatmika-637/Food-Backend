import express from "express";
import { createFood, getAllFood, getSingleFood, deleteFood, updateFood } from "../controllers/food.controller.js";
import uplord from "../middleware/uplord.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const FoodRoutes = express.Router();
FoodRoutes.post("/create-food", isAuthenticated, isAdmin, uplord.single("image"), createFood);
FoodRoutes.get("/get-all-food", getAllFood);
FoodRoutes.get("/get-single/:id", getSingleFood);
FoodRoutes.delete("/delete/:id", deleteFood, isAuthenticated, isAdmin);
FoodRoutes.put("/update/:id", isAuthenticated, isAdmin,uplord.single("image"), updateFood);

export default FoodRoutes;