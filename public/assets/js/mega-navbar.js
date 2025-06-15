let menutoggle= document.querySelector(".menuToggle");
let header= document.querySelector('header');

menutoggle.addEventListener('click', function() {
   header.classList.toggle('active');
});