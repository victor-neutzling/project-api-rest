import express from "express";
import users from "./userRoutes.js";
import tasks from "./tasksRoutes.js";
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "project - api rest" });
    });
    app.use(express.json(), users, tasks);
};
export default routes;
//# sourceMappingURL=index.js.map