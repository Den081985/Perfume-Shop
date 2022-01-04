class Header {
  render(counter) {
    const html = `
        <div class = "header-container">
            <span class = "header-span">Магазин Парфюмерии</span>
            <div class = "header-counter">
               Товаров в корзине: ${counter}
            </div>
        </div>
      
      `;
    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);
