"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Agus" },
    { id: 3, name: "Andin" },
    { id: 4, name: "Adis" },
];
class UserController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req.body;
        data.push({
            id: id,
            name: name
        });
        return res.sendStatus(201);
    }
    show(req, res) {
        const { id } = req.params;
        let user = data.find(item => item.id == id);
        return res.send(user);
    }
    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        let user = data.find(item => item.id == id);
        user.name = name;
        return res.sendStatus(200);
    }
    delete(req, res) {
        const { id } = req.params;
        let user = data.filter(item => item.id != id);
        return res.send(user);
    }
}
exports.default = new UserController();
