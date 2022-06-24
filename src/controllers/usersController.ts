import { Request, Response } from "express"
import users from "../models/User.js"


class userController{
    static getUsers = (req:Request,res:Response) =>{
        users.find((err:any,users) => {
            res.status(200).json(users)
        })
    }
    static getUserById = (req:Request,res:Response) =>{
        const id = req.params.id

        users.findById(id,(err:any,users:any) => {
            if(err){
                res.status(404).send({message: err.message})
            }else{
                res.status(200).send(users);
            }
        })
    }
    static setUser = (req:Request,res:Response) =>{
        let user = new users(req.body);

        user.save((err:any)=>{
            if(err){
                res.status(500).send({message: `${err.message} - user register failed.`})
            }else{
                res.status(201).send(user.toJSON())
            }
        })
    }
    static updateUser = (req:Request,res:Response) =>{
        const id = req.params.id

        users.findByIdAndUpdate(id,{$set:req.body},(err:any) => {
            if(err){
                res.status(404).send({message: err.message})
            }else{
                res.status(204).send({message: 'user updated sucessfully'});
            }
        })
    }
    static deleteUser = (req:Request,res:Response) =>{
        const id = req.params.id

        users.findByIdAndRemove(id,(err:any,users:any) => {
            if(err){
                res.status(404).send({message: err.message})
            }else{
                res.status(204).send({message: 'user deleted sucessfully'});
            }
        })
    }
}

export default userController;