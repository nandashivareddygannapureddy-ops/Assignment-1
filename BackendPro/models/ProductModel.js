import {Schema,model}from 'mongoose'
//create product schema
const productSchema=new Schema({
    pname:{
        type:String,
        required:[true,"Product name is required"],
        minLength:[5,"minimum length should be 5"],
        maxLength:[6,"maxlength exceeded"]
    },
    pmodel:{
        type:String,
        required:[true,"product model is required"]
    },
    productPrice:{
        type:Number,
        required:[true,"age is required"],
        min:[20000,"price should be above 20000"],
        max:[50000,"price should be less than 50000"]
    }
},{strict:"throw",timestamps:true});

//create product model with that schema

export const ProductModel=model("product",productSchema)