const express =require("express");
const bodyParse=require("body-parser");
const postRouter =require('./routes/postRouter');


//Initial Express
const app =express();


app.use(bodyParse.json());
//Declare PORT
const PORT =5000;

//Routes
app.get('/', (req,res)=>{
    res.send("Hello World..");
})


app.use("/",postRouter);



//
app.listen(PORT, /*@Callbac*/ (req,res)=>{
    console.log(`Server listening to at localhost:${PORT}`);
})