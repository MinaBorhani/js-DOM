// let search =  document.getElementById("search-books");
// let bookList = document.getElementById("book-list");

// let title =document.getElementsByClassName("title");

// Array.from(title).forEach (function(title){
//     console.log(title);
// });



// --remove Li tages ...
let btns = document.querySelectorAll("#book-list .delete");

Array.from(btns).forEach (function (bt){
    bt.addEventListener("click" , function(e){
        // console.log(e.target);
        let targetEvent = e.target.parentElement;
        targetEvent.parentNode.removeChild(targetEvent);
    })
})