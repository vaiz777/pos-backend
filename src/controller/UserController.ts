import { Request, Response } from "express";
import IController from "./Interface";

let data: any[] = [
    {id: 1, name: "Andi"},
    {id: 2, name: "Agus"},
    {id: 3, name: "Andin"},
    {id: 4, name: "Adis"},
]

class UserController implements IController{
    index(req: Request, res: Response): Response {
        return res.send(data)
    }

    create(req: Request, res: Response): Response {
        const { id, name } = req.body
        data.push({
            id: id,
            name: name
        })
        return res.sendStatus(201)
    }

    show(req: Request, res: Response): Response {

       const { id } = req.params
       let user = data.find(item => item.id == id)
       return res.send(user)
       
    }
    update(req: Request, res: Response): Response {
        const { id } = req.params
        const { name } = req.body;

        let user = data.find(item => item.id == id)
        user.name = name

        return res.sendStatus(200)

    }
    delete(req: Request, res: Response): Response {
        const { id } = req.params

        let user = data.filter(item => item.id != id )
        return res.send(user)
    }
}

export default new UserController();