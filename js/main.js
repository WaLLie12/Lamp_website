/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

const popularSwiper = new Swiper('.popular__content', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        768:{
            centeredSlides: false,
        }
    }
  });

  const faqItems = document.querySelectorAll('.choose__faq-item')

  faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.choose__faq-header')

  faqHeader.addEventListener('click', () =>{

    const openItem = document.querySelector('.faq_open')

    toggleItem(item)

    if (openItem && openItem != item) {
        toggleItem(openItem)
    }
  })

})

const toggleItem = (item) => {
    const faqContent = item.querySelector('.choose__faq-content')
    if (item.classList.contains('faq_open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq_open')
    } else{
    faqContent.style.height = faqContent.scrollHeight + 'px'
    item.classList.add('faq_open')
    }
}