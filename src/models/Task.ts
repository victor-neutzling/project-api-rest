import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
    {
        id:{type:String},
        description:{type:String,required:true},
        date:{type:String,required:true},//possibly change later
        user:{type: mongoose.Schema.Types.ObjectId,ref:'users',required:true}

    }
)
const tasks = mongoose.model('tasks',taskSchema);

export default tasks;