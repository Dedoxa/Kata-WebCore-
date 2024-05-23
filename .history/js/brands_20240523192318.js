'use strict'
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const brandsContainer = document.querySelector('.window__brands');
  const toggler = document.querySelector('.toggler-showHide');

  