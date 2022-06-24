import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
    {
        id:{type:String},
        description:{type:String},
        date:{type:String},//possibly change later
        user:{type: mongoose.Schema.Types.ObjectId,ref:'users',required:true}

    }
)
const tasks = mongoose.model('tasks',taskSchema);

export default tasks;