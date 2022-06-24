import express from "express";
import tasksController from "../controllers/tasksController.js";

const router = express.Router();

router
    .get("/api/v1/task",tasksController.getTasks)
    .get("/api/v1/task/:id",tasksController.getTaskById)
    .post("/api/v1/task",tasksController.setTask)
    .put("/api/v1/task/:id",tasksController.updateTask)
    .delete("/api/v1/task/:id",tasksController.deleteTask)
    
export default router;