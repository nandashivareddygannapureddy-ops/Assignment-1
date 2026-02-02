import exp from "express";
import { UserModel } from "../models/UserModel.js";  // include .js extension

export const userApp = exp.Router();

//create user
userApp.post('/users', async (req, res) =>{
  let newUser=req.body;
  let newUserDoc=new UserModel(newUser);
  console.log(newUserDoc);
  await newUserDoc.save();
  res.status(201).json({'message':"user created succesfully"})
})

// GET all users
userApp.get("/users", async (req, res) => {
  try {
    let usersList = await UserModel.find();
    res.status(200).json({ message: "All users", payload: usersList });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});
//read user by ObjectID
userApp.get('/users/:id',async(req,res)=>{
  let objId=req.params.id;
  //find user in db
  let userObj=await UserModel.findById(objId)
  //send req
  res.status(201).json({message:"user fetched succesfully",payload:userObj});
})