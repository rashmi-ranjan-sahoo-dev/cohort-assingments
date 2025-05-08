
import express from 'express';
import cors from 'cors';
import { addBookmark, deleteBookmark, getAllBookmarks } from './routes/bookmarks.js'; // importing callback functions for routes
const app = express();
const PORT = 3001;
 export let bookmarks = [];
 // in memory space
 let count = 1;

app.use(cors());
app.use(express.json());


// Get all bookmarks
app.get('/bookmarks', getAllBookmarksf,(req,res)=>{
    res.send({
      bookmarks
    })
});

// Add a new bookmark
app.post('/bookmarks', addBookmark,(req,res) => {
  
  const url = req.url;
  const title = req.title;

  bookmarks.push({
   url:url,
   title:title,
   id:count
  })
  
  res.send({
    url:url,
    title:title,
    id:count
  })
  count++;
  // console.log(bookmarks)
});


// Delete a bookmark
app.delete('/bookmarks', deleteBookmark,function(req,res){

  let id = parseInt(req.body.id);
    
     for(let i = 0 ; i < bookmarks.length ;i++){
      if(bookmarks[i].id === id){
          bookmarks.splice(i,1);
          res.send({
            isFind:true
           })
      }
     }
          res.status(401).json({ message: 'Invalid credentials' });
    console.log(bookmarks)
});

//  TODO: Can u implement searching bookmark and favorite and unfavorite bookmark route ??

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
