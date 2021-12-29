import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.createCard();
    this.addHandler();
  }


  createCard() {
    this.card = createElement(`
      <div class="card">
        <div class="card__top">
            <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
            <span class="card__price">€${this.product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this.product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>
      `);

    return this.card;
  }

  addHandler() {
    const event = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true,
    });

    const button = this.elem.querySelector('button');

    button.addEventListener('click', (e) => {
      this.elem.dispatchEvent(event);
    });
  }

}
