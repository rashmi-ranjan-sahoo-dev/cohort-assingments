

const API_URL = 'http://localhost:3001/bookmarks';

// Fetch bookmarks when the page loads
document.addEventListener('DOMContentLoaded', () => {
//   start here
fetchBookmarks();
});

// Fetch bookmarks from the backend
function fetchBookmarks() {
    //  start here
}

// Add a bookmark to the DOM
function addBookmarkToDOM(bookmark) {
    //  start here
    let list = document.getElementById("bookmark-list");
    let li = document.createElement('li')
    li.setAttribute("id",`${bookmark.id}`)
    li.innerHTML = `<a href = "${bookmark.url}">${bookmark.title}</a><button onclick = "deleteBookmark(${bookmark.id})">Delete<button><button onclick = "UpdateBookmark(${bookmark.id})">Update<button>`
    
    list.appendChild(li);
}

// Add a new bookmark
document.getElementById('add-bookmark-btn').addEventListener('click', async () => {
      //  start here
      let url = document.getElementById("bookmark-url").value;
      let title = document.getElementById("bookmark-category").value;

      if(!url){
        alert("Enter valid url")
      }else if(!title){
        alert("Enter valid title")
      }
      
     const bookmark =  await axios.post(API_URL,{
        url:url,
        title:title
      })

    //   console.log(bookmark)

      addBookmarkToDOM(bookmark.data)
      url = '';
      title = '';

});

// Delete a bookmark
async function deleteBookmark(id) {
    try {
        let res = await axios.delete(API_URL, {
            data: { id: id }   // 👈 send the id in the body
        });
        console.log(res.data);
        
        // Remove the item from the DOM
        const li = document.getElementById(`${id}`);
        if (li) li.remove();
    } catch (error) {
        console.error('Delete failed:', error);
    }
}