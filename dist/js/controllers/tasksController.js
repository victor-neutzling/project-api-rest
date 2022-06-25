import tasks from "../models/Task.js";
class taskController {
}
taskController.getTasks = (req, res) => {
    tasks.find((err, tasks) => {
        res.set({ 'Access-Control-Allow-Origin': '*' });
        res.status(200).json(tasks);
    });
};
taskController.getTaskById = (req, res) => {
    const id = req.params.id;
    tasks.findById(id, (err, tasks) => {
        if (err) {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(404).send({ message: err.message });
        }
        else {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(200).send(tasks);
        }
    });
};
taskController.setTask = (req, res) => {
    let task = new tasks(req.body);
    task.save((err) => {
        if (err) {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(500).send({ message: `${err.message} - task register failed.` });
        }
        else {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(201).send(task.toJSON());
        }
    });
};
taskController.updateTask = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (err) {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(404).send({ message: err.message });
        }
        else {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(204).send({ message: 'task updated sucessfully' });
        }
    });
};
taskController.deleteTask = (req, res) => {
    const id = req.params.id;
    tasks.findByIdAndRemove(id, (err, tasks) => {
        if (err) {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(404).send({ message: err.message });
        }
        else {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(204).send({ message: 'task deleted sucessfully' });
        }
    });
};
export default taskController;
//# sourceMappingURL=tasksController.js.map