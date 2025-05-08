
import express from 'express';
const app = express();
import cors from 'cors';
import { bookmarks } from '../index.js';

app.use(express.json());
app.use(cors());


export async function addBookmark(req,res,next){
// write here
    req.url = req.body.url;
    req.title = req.body.title;
    next();
}

export async function deleteBookmark(req,res,next){
// write here  

  next();
 
}

export async function getAllBookmarks(req,res,next){
// write here
next();
}