const klik=document.querySelector('.burger');
const side_bar=document.querySelector('nav ul');
const href=document.querySelector('ul li a');
klik.addEventListener('click', function(){
    klik.classList.toggle('toggle');
    side_bar.classList.toggle('side');

})