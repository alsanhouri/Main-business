// header
let humborger = document.querySelector('.humborger');
let link = document.querySelector('header nav>ul');

humborger.addEventListener('click', () =>{
  humborger.classList.toggle('active');
  link.classList.toggle('active');
})

document.querySelectorAll('header ul>li>a').forEach(n => n.addEventListener('click', ()=>{
  humborger.classList.remove('active');
  link.classList.remove('active');
}))

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

