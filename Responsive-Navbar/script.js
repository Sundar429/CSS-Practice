const btn=document.getElementsByClassName('btn')[0];
const nav_links=document.getElementsByClassName('nav-links')[0];


btn.addEventListener('click',()=>{
    nav_links.classList.toggle('active')
})