import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'
export const prodRoute =exp.Router()


//route to  reate new product
prodRoute.post("/product",async(req,res)=>{
    let newprod =req.body;
    let newProdDoc = new ProductModel(newprod)
    await newProdDoc.save()
    res.status(200).json({message:"new product created successfully"})
})

//get products
prodRoute.get("/products",async(req,res)=>{
    let products=await ProductModel.find()
    res.status(200).json({message:"products fetched",payload:products})
})
//get product by id
prodRoute.get("/product/product-id/:pid",async(req,res)=>{
    let {pid}=req.params
    let product=await ProductModel.findById(pid)
    res.status(200).json({message:"product fetched",payload:product})
})
//update product by id
prodRoute.put("/product/product-id/:pid",async(req,res)=>{
    let {pid}=req.params
    let updatedprod=req.body
    let updatedProdDoc=await ProductModel.findByIdAndUpdate(
        pid,
        updatedprod,
        {new:true}
    )
    res.status(200).json({message:"product updated",payload:updatedProdDoc})
})