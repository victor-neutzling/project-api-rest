import users from "../models/User.js";
class userController {
}
userController.getUsers = (req, res) => {
    users.find((err, users) => {
        res.status(200).json(users);
    });
};
userController.getUserById = (req, res) => {
    const id = req.params.id;
    users.findById(id, (err, users) => {
        if (err) {
            res.status(404).send({ message: err.message });
        }
        else {
            res.status(200).send(users);
        }
    });
};
userController.setUser = (req, res) => {
    let user = new users(req.body);
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - user register failed.` });
        }
        else {
            res.status(201).send(user.toJSON());
        }
    });
};
userController.updateUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (err) {
            res.status(404).send({ message: err.message });
        }
        else {
            res.status(204).send({ message: 'user updated sucessfully' });
        }
    });
};
userController.deleteUser = (req, res) => {
    const id = req.params.id;
    users.findByIdAndRemove(id, (err, users) => {
        if (err) {
            res.status(404).send({ message: err.message });
        }
        else {
            res.status(204).send({ message: 'user deleted sucessfully' });
        }
    });
};
export default userController;
//# sourceMappingURL=usersController.js.map