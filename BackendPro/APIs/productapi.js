import exp from 'express';
import { ProductModel } from "../models/ProductModel.js";
export const productApp=exp.Router()
//get all products
productApp.get("/products",async(req,res)=>{
    try{
        let productsList=await ProductModel.find()
        res.status(200).json({"message":"all products",payload:productsList})
    }catch(err){
        console.log(err)
        res.status(500).json({"message":"server error"})
    }
})
//get products by id
productApp.get("/products/:id",async(req,res)=>{
    let productId=req.params.id
    let product=await ProductModel.findById(productId)
    if(!product){
        return res.status(404).json({'message':'Product Not Found'})
    }
    res.status(200).json({'message':'Product Found',payload:product})
})
//create product
productApp.post('/products', async (req, res) =>{
    let newProduct=req.body;
    let newProductDoc=new ProductModel(newProduct);
    console.log(newProductDoc);
    await newProductDoc.save();
    res.status(201).json({'message':"product created succesfully"})
})
//update the product using id
productApp.put('/products/:id',async(req,res)=>{
    let productId=req.params.id;
    let modifiedProduct=req.body;
    //update product in db
    let latestProduct=await ProductModel.findByIdAndUpdate(productId,{$set:modifiedProduct},{new:true})
    //send req
    res.status(201).json({message:"product updated succesfully",payload:latestProduct})
})
//delete product by id
productApp.delete('/products/:id',async(req,res)=>{
    let productId=req.params.id;
    //delete product in db
    let deletedProduct=await ProductModel.findByIdAndDelete(productId)
    //send req
    res.status(201).json({message:"product deleted succesfully",payload:deletedProduct})
})