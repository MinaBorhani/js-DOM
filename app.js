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


// hide books
const hideBox = document.querySelector("#hide");

hideBox.addEventListener("change" , function(e){
    if(hideBox.checked){
        list.style.display = "none";
    }else{
        list.style.display = "block";
    }
})


// Search books
const searchBar = document.forms["search-books"].querySelector('input');

searchBar.addEventListener("keyup" , function(e){
    const trem = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(trem) != -1){
            book.style.display = "block";
        }else{
            book.style.display = "none";
        }
    })
})



// tabbed content
// const tabs = document.querySelector(".tabs");
// const panels = document.querySelectorAll(".panel");
// tabs.addEventListener("click" , function(e){
//     if(e.target.tageName == "li"){
//         const targetPanele = document.querySelector(e.target.dataset.target);
//         Array.from(panels).forEach(function(panel){
//             if(panel == targetPanele){
//                 panel.classList.add("active");
//             }else{
//                 panel.classList.remove("active");
//             }
//         })
//     }
// })


const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});