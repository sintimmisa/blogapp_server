const express =require("express");


//Initial Express
const app =express();

//Declare PORT
const PORT =5000;


app.get('/', (req,res)=>{
    res.send("Hello World..");
})






//
app.listen(PORT, /*@Callbac*/ (req,res)=>{
    console.log(`Server listening to at localhost://${PORT}`);
})