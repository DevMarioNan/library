const addBtn = document.querySelector('#add');
const overlay = document.querySelector('.overlay');
const bookGrid = document.querySelector('.book-grid')
let deleteBtns = document.querySelectorAll('#delete');
let readBtns = document.querySelectorAll('.unread');

//book info
const bookTitle = document.querySelector('#book_name');
const bookAuthor = document.querySelector('#book_author');
const bookPages = document.querySelector('#book_pages');
const bookRead = document.querySelector('#book_read')
const bookAdd = document.querySelector('#book_add');

let books = [];
const bookTemp = function(name,author,pages,read){
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.isRead = read;
}


addBtn.addEventListener('click',(e)=>{
    overlay.classList.toggle('hidden');
})

overlay.addEventListener('click',(e)=>{
    if(e.target.id === "overlay"){
    overlay.classList.toggle('hidden');
    }
})

bookAdd.addEventListener('click',(e)=>{
    if(!bookTitle.value){
        alert("please write the title of the book");
    }else if(!bookAuthor.value){
        alert("please write the author name of the book");
    }else if(!bookTitle.value){
        alert("please write how many pages is this book");
    }else{
        const book = new bookTemp(bookTitle.value,bookAuthor.value,bookPages.value,bookRead.checked);
        books.push(book);
        console.log(books);
        bookTitle.value = '';
        bookAuthor.value = '';
        bookPages.value = '';
        bookRead.checked = false;
        overlay.classList.toggle('hidden');
        updateGrid();
    }
})




const updateGrid = ()=>{
    bookGrid.innerHTML='';
    
    books.forEach((book)=>{
        //creating elements
        const bookDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const isReadBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        
        //adding atttrubutes
        bookDiv.classList.add('book');
        bookDiv.setAttribute('id',books.indexOf(book));
        h2.setAttribute('id','title');
        h3.setAttribute('id','author');
        p.setAttribute('id','pages');
        isReadBtn.setAttribute('id','read');
        isReadBtn.classList.add('unread');
        deleteBtn.setAttribute('id','delete');
    
        //adding values
        h2.innerText = "\"" + book.bookName + "\"";
        h3.innerText = book.bookAuthor;
        p.innerText = book.bookPages;
        deleteBtn.innerText = "delete";
        
        if(book.isRead){
            isReadBtn.classList.add('read');
            isReadBtn.innerText = 'read';
        }else{
            isReadBtn.innerText = 'unread';
        }
    
        
        //appending elemetns
        bookDiv.append(h2,h3,p,isReadBtn,deleteBtn);
        bookGrid.append(bookDiv);
    })

    readBtns = document.querySelectorAll('.unread');
    readBtns.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            btn.classList.toggle('read');
            if(btn.innerText === 'unread')btn.innerText = 'read';
            else btn.innerText = 'unread';
        })
    });



    deleteBtns = document.querySelectorAll('#delete');
    
    
    deleteBtns.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            books.splice(btn.parentElement.id, 1);
            btn.parentElement.remove();
        })
    })
}

