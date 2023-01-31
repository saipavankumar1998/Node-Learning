const mongoose=require("mongoose");
const Schema=mongoose.Schema;


//define schema
const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
}, {timestamps:true});

//create a model based on the schema and name the model as the singular of the collection name(i.e, "blogs"---> "blog")
const Blog=mongoose.model("Blog", blogSchema)

module.exports=Blog; 