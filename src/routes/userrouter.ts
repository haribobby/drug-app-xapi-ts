// const express = require('express');

import axios from 'axios';
import { Router, Response, Request, NextFunction } from 'express';
import UserResponse from '../types/userresponse';
import PostRequest from '../types/PostRequest';


const userroute = Router();

let userList:UserResponse[] = [];


userroute.get('/', (req:Request,res:Response,next:NextFunction) => {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(userdata =>{ 
        userList = userdata.data;
        res.send(userList)
    })
    .catch(error => console.error(error));
    
});

userroute.get('/:id', (req:Request,res:Response,next:NextFunction) => {

    const id = req.params.id;
    console.log('id is..... '+id);
    axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    .then(userdata => res.send(userdata.data))
    .catch(error => console.error(error));
});


userroute.post('/posts', (req:Request,res:Response,next:NextFunction) => {
    
   let postInput:PostRequest = {
       body: req.body.info,
       id: req.body.id,
       title: req.body.title,
       userId: req.body.userId

   }
    axios.post("https://jsonplaceholder.typicode.com/posts", postInput)
    .then(postdata => res.send(postdata.data))
    .catch(error => console.error(error));
});
export default userroute;