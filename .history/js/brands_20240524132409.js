// 'use strict'
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const BRANDS_CONTAINER = document.querySelector('.window__brands');
  const TOGGLER = document.querySelector('.toggler-showHide');
  const ARROW = document.querySelector('.arrow');
  console.log(ARROW);

  TOGGLER.addEventListener('click', function () {
    if (TOGGLER.textContent === 'Показать всё') {

      BRANDS_CONTAINER.classList.add('js__expand');
      ARROW.classList.add('js__upsideDown');

      TOGGLER.textContent = 'Скрыть';

    } else if (TOGGLER.textContent === 'Скрыть') {

      BRANDS_CONTAINER.classList.remove('js__expand');
      ARROW.classList.remove('js__upsideDown');

      TOGGLER.textContent = 'Показать всё';

    };
  });

  