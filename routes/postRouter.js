const express =require('express');
const postRouter =express.Router();
const posts = require('../database/postDb');


//get all post
postRouter.get('/posts',(req,res)=>{
    res.json(posts)
});


module.exports=postRouter;