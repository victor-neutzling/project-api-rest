import { Request, Response } from "express";
import tasks from "../models/Task.js";
import users from "../models/User.js";

class taskController{
    static getTasks = (req:Request,res:Response) =>{
        tasks.find((err:any,tasks) => {
            res.set({'Access-Control-Allow-Origin': '*'})
            res.status(200).json(tasks)
        })
    }
    static getTaskById = (req:Request,res:Response) =>{
        const id = req.params.id
        
        tasks.findById(id,(err:any,tasks:any) => {
            if(err){
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(404).send({message: err.message})
            }else{
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(200).send(tasks);
            }
        })
    }
    static setTask = (req:Request,res:Response) =>{
        let task = new tasks(req.body);

        task.save((err:any)=>{
            if(err){
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(500).send({message: `${err.message} - task register failed.`})
            }else{
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(201).send(task.toJSON())
            }
        })
    }
    static updateTask = (req:Request,res:Response) =>{
        const id = req.params.id

        tasks.findByIdAndUpdate(id,{$set: req.body}, (err:any) => {
            if(err){
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(404).send({message: err.message})
            }else{
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(204).send({message: 'task updated sucessfully'});
            }
        })
    }
    static deleteTask = (req:Request,res:Response) =>{
        const id = req.params.id

        tasks.findByIdAndRemove(id,(err:any,tasks:any) => {
            if(err){
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(404).send({message: err.message})
            }else{
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(204).send({message: 'task deleted sucessfully'});
            }
        })
    }
}

export default taskController;