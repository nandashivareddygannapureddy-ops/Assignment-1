import exp from 'express'
import { userApp } from './APIs/userapi.js';
import { productApp } from './APIs/productapi.js';
import {connect} from 'mongoose';
const app=exp();
const port=4000;
app.use(exp.json())
app.use("/api",userApp)
app.use("/api",productApp)

//connect to db server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/anuragdb4")
        console.log("connected to db server")
        app.listen(port,()=>console.log("server listening on port 4000"))
    }catch(err){
        console.log("error in connecting to db server",err)
    }
}
connectDB();
app.use(exp.json());
app.use(exp.json());
app.use("/api",userApp)
app.use("/api",productApp)