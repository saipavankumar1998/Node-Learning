const fs=require("fs");

//read files
const readFile=()=>{fs.readFile("./docs/blog1.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
    })
}


///write files
const writeFile=
()=>{
    fs.writeFile("./docs/blog1.txt","Hi",()=>{
        readFile()
    })
}


//directories
// if(!fs.existsSync("./assets")){
//     fs.mkdir("./assets",(err)=>{
//         if(err){console.log(err)}
//         console.log("folder created");       
//     })    
// }
// else{
//     fs.rmdir("./assets",(err)=>{
//         if(err){console.log(err)}
//         console.log("folder deleted");
//     })
// }

//create remove files
if(fs.existsSync("./docs/delete.txt")){
    fs.unlink("./docs/delete.txt",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("file deleted")
    })
}
