import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter }   from './routes/users.js';
import { recipesRouter }   from './routes/recipe1.js';


const app=express();

app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);
mongoose.connect("mongodb+srv://tharun:IgkCXOgzGENP4ZE8@cluster0.8siojja.mongodb.net/recipe?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected to db");
});
app.listen(4000,()=>{console.log("Server running")});