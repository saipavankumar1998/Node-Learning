const express=require("express");
const Blog=require("../models/blog");
const router=express.Router()


///mongoose and mongo sandbox routes
router.get("/add-blog",(req,res)=>{
    const blog=new Blog({
        title:"new blog 4",
        snippet:"About my new blog",
        body:"blah blah you!"
    });

    blog.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{console.log(err.message)})
})

router.get("/view-blogs",(req,res)=>{
    Blog.find().sort({createdAt:-1}).then(result=>{
        res.render("index",{title:"All Blogs", blogs:result})
    }).catch(err=>{console.log(err)})
})

router.get("/single-blog",(req,res)=>{
    Blog.findById("639704de83868062708424c6").then((result)=>{console.log(result);res.send(result)})
    .catch((err)=>{console.log(err.message)})
})

router.get("/blogs/:id",(req,res)=>{
    const id=req.params.id;
    Blog.findById(id).then((result)=>{
        res.render("details",{blog:result, title:"Blog details", id})
    }).catch((err)=>{console.log(err)})
})

router.get("/",(req,res)=>{
    res.redirect("/view-blogs")
})

router.get("/about",(req,res)=>{
    res.render("about", {title: "About me"})
})

router.get("/blogs/create",(req,res)=>{
    res.render("create", {title: "New Blog"})
})



router.get("/blogs/del/:id",(req,res)=>{
    const id=req.params.id;
    console.log(id)
    Blog.findByIdAndDelete(id).then(result=>{
        res.redirect("/view-blogs")
    }).catch(err=>{console.log(err)})
})

router.post("/blogs",(req,res)=>{
   console.log(req.body.title);

   const blog=new Blog(req.body)

    blog.save().then(result=>{
        res.redirect("/view-blogs")
    }).catch(err=>{console.log(err)})
})



module.exports=router;