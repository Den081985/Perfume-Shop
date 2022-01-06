function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch("http://myjson.dit.upm.es/api/bins/9r0p")
  .then((result) => result.json())
  .then((body) => {
    CATALOG = body;
    spinnerPage.handleClear();
    render();
  })
  .catch((err) => {
    spinnerPage.handleClear();
    errorPage.render();
  });
