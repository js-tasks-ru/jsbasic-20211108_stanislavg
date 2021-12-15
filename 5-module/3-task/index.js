function initCarousel() {
  const SLIDES_AMOUNT = 4;

  const carousel = document.querySelector('.carousel__inner');
  const slideWidth = carousel.offsetWidth;
  const buttonNext = document.querySelector('.carousel__arrow_right');
  const buttonPrev = document.querySelector('.carousel__arrow_left');

  let currentSlideNum = 0;

  let isCurrentNum = () => {
    if (currentSlideNum == SLIDES_AMOUNT - 1) {
      buttonNext.style.display = 'none';
    } else {
      buttonNext.style.display = '';
    }

    if (currentSlideNum == 0) {
      buttonPrev.style.display = 'none';
    } else {
      buttonPrev.style.display = '';
    }
  };

  isCurrentNum();

  buttonNext.addEventListener('click', ()=> {
    currentSlideNum++;
    isCurrentNum();
    console.log(currentSlideNum);
    let moving = -slideWidth * currentSlideNum;
    carousel.style.transform = `translateX(${moving}px)`;
  });

  buttonPrev.addEventListener('click', ()=> {
    currentSlideNum--;
    isCurrentNum();
    console.log(currentSlideNum);
    let moving = -slideWidth * currentSlideNum;
    carousel.style.transform = `translateX(${moving}px)`;
  });
}
