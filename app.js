console.log("hello");

let navLinks = document.querySelector('.navlinks');
let toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});