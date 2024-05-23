// 'use strict'
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
  });

  let BRANDS_CONTAINER = document.querySelector('.window__brands');
  let TOGGLER = document.querySelector('.toggler-showHide');

  TOGGLER.addEventListener('click', function () {
    if (TOGGLER.textContent === 'Показать всё') {
      BRANDS_CONTAINER.classList.add('expand');
      TOGGLER.textContent = 'Скрыть';
    }

    if (TOGGLER.textContent === 'Скрыть') {
      BRANDS_CONTAINER.classList.remove('expand');
      TOGGLER.textContent = 'Показать всё';
    }
  });

  