import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideNum = 0;
    this.elem = null;

    this.initCarousel();
  }

  initCarousel() {
    this.elem = this.createCarousel();

    const buttonNext = this.elem.querySelector('.carousel__arrow_right');
    const buttonPrev = this.elem.querySelector('.carousel__arrow_left');

    this.setStateButton(buttonPrev, buttonNext);
    this.addHandlers(buttonPrev, buttonNext);
    this.addCustomHandlers();
  }

  addCustomHandlers() {
    const event = (id) => (
      new CustomEvent("product-add", {
        detail: id,
        bubbles: true,
      })
    );

    const buttons = this.elem.querySelectorAll('.carousel__button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const id = button.closest('.carousel__slide').dataset.id;

        this.elem.dispatchEvent(event(id));
      });
    });
  }

  moveSlide(buttonPrev, buttonNext) {
    const carouselInner = this.elem.querySelector('.carousel__inner');
    const slideWidth = carouselInner.offsetWidth;
    const moving = -slideWidth * this.currentSlideNum;
    carouselInner.style.transform = `translateX(${moving}px)`;
    this.setStateButton(buttonPrev, buttonNext);
  }

  addHandlers(buttonPrev, buttonNext) {

    buttonNext.addEventListener('click', () => {
      this.currentSlideNum++;
      this.moveSlide(buttonPrev, buttonNext);
    });

    buttonPrev.addEventListener('click', () => {
      this.currentSlideNum--;
      this.moveSlide(buttonPrev, buttonNext);
    });
  }

  setStateButton(buttonPrev, buttonNext) {
    const slidesAmount = this.slides.length;
    const lastSlide = slidesAmount - 1;

    if (this.currentSlideNum === lastSlide) {
      buttonNext.style.display = 'none';
    } else {
      buttonNext.style.display = '';
    }

    if (this.currentSlideNum === 0) {
      buttonPrev.style.display = 'none';
    } else {
      buttonPrev.style.display = '';
    }
  }

  createButtonsTemplate() {
    return (
      `<div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>`
    );
  }

  createSlidesTemplate() { // [obj0, obj1, obj2 ...]
    return this.slides.map(slide => this.createSlideTemplate(slide));
  }

  createSlideTemplate(slide) {
    return (
      `<div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
      </div>`
    );
  }

  createCarousel() {
    return createElement(
      `<div class="carousel">
        ${this.createButtonsTemplate()}
        <div class="carousel__inner">
          ${this.createSlidesTemplate().join('')}
        </div>
      </div>`
    );
  }
}
