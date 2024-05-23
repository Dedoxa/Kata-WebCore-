'use strict'
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const BRANDS_CONTAINER = document.querySelector('.window__brands');
  const TOGGLER = document.querySelector('.toggler-showHide');

  TOGGLER.addEventListener('click', function (){
    console.log('проверка')
  });

  