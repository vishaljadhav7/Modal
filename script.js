var modalBtn = document.querySelector('.modal-btn');

var closeBtn = document.querySelector('.close-btn');

var modal = document.querySelector('.modal');

modalBtn.addEventListener('click', ()=>{
     modal.style.display= 'block';
})

closeBtn.addEventListener('click', ()=>{
    modal.style.display= 'none';
})

modal.addEventListener('click', (e)=>{
   if(e.target === modal){
    modal.style.display= 'none';
   }
})
