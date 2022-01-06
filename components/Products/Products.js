class Products {
  constructor() {
    this.classNameActive = "products-element-btn-active";
    this.labelAdd = "Добавить в кoрзину";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
      headerPage.render(products.length);
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
      headerPage.render(products.length);
    }
  }

  render() {
    const productsStore = localStorageUtil.getProducts();

    let htmlCatalog = ``;

    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeText = this.labelRemove;
        activeClass = " " + this.classNameActive;
      }

      htmlCatalog += `
                <li class = "products-element">
                    <span class = "products-element-name">${name}</span>
                    <img class = "products-element-img" src = "${img}"/>
                    <span class = "products-element-price">Цена: ${price.toLocaleString()}P</span>
                    <button class = "products-element-btn${activeClass}" onclick = "productsPage.handleSetStorage(this,'${id}');">
                    ${activeText}
                    </button>
                </li>
            
            `;
      const html = `
                <ul class = "products-container">${htmlCatalog}</ul>
            
            `;
      ROOT_PRODUCTS.innerHTML = html;
    });
  }
}

const productsPage = new Products();
