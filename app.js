const express=require("express");
const morgan =require("morgan");
const mongoose=require("mongoose");
const blogRoutes=require("./routes/blogRoutes")
const { urlencoded } = require("express");

//express app
const app=express();

//connect to mongoDB-connection string

const dbURI= "mongodb+srv://Pavan:MongoLearning@firstmongocluster.yaobsux.mongodb.net/FirstMongoCluster?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(dbURI).then((result)=>{//listen to request
    app.listen(3000);}).catch((er)=>console.log(er.message))

//blog Routes
app.use(blogRoutes)

//register view engine
app.set("view engine", "ejs");

/////////////////middleware and static files////////////////

//to make a static file public in the frontend
app.use(express.static("./public"));

///rakes the data encoded in the url and passes it a a json object
app.use(express.urlencoded({extended:true}))

//to get different req obj properties
app.use(morgan('tiny'));
///end of midleware/////

///this only fires when none of the above paths match from a user requested url
app.use((req,res)=>{
    res.status(404).render("404", {title: "404"})
})