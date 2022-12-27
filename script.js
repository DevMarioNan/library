const addBtn = document.querySelector('#add');
const overlay = document.querySelector('.overlay');


addBtn.addEventListener('click',(e)=>{
    overlay.classList.toggle('hidden');
})

overlay.addEventListener('click',(e)=>{
    overlay.classList.toggle('hidden');
})