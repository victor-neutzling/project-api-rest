import express from "express";
import userController from "../controllers/usersController.js";
const router = express.Router();
router
    .get("/api/v1/user", userController.getUsers)
    .get("/api/v1/user/:id", userController.getUserById)
    .post("/api/v1/user", userController.setUser)
    .put("/api/v1/user/:id", userController.updateUser)
    .delete("/api/v1/user/:id", userController.deleteUser);
export default router;
//# sourceMappingURL=userRoutes.js.map