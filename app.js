// let search =  document.getElementById("search-books");
// let bookList = document.getElementById("book-list");

// let title =document.getElementsByClassName("title");

// Array.from(title).forEach (function(title){
//     console.log(title);
// });



// --remove Li tages ...
// let btns = document.querySelectorAll("#book-list .delete");

// Array.from(btns).forEach (function (bt){
//     bt.addEventListener("click" , function(e){
//         // console.log(e.target);
//         let targetEvent = e.target.parentElement;
//         targetEvent.parentNode.removeChild(targetEvent);
//     })
// })



// delete books 
let list = document.querySelector("#book-list ul");

// console.log(list);
list.addEventListener ('click' , function(e){
    if(e.target.className == 'delete'){
    let liEvent = e.target.parentElement;
    // console.log(liEvent);
    list.removeChild(liEvent)
    }
});



// add books
const addForme = document.forms["add-book"];

// console.log(addForme);
addForme.addEventListener("submit" , function(e){
    e.preventDefault();
    let value = addForme.querySelector("input[type='text']").value;
    // console.log(value);

    // Create Elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // add content
    deleteBtn.textContent = "delete";
    bookName.textContent = value;


    // add classes
    // bookName.classList.add("name");
    // deleteBtn.classList.add("delete");
    bookName.setAttribute("class" , "name");
    deleteBtn.setAttribute("class" , "delete");

    // append DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})



