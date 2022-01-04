class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = "";
  }

  render() {
    const productsStore = localStorageUtil.getProducts();

    let htmlCatalog = ``;
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
                <tr>
                    <td class = "shopping-name">${name}</td>
                    <td class = "shopping-price">${price.toLocaleString()}Р</td>
                </tr>
            
            `;
        sumCatalog += price;
      }
    });

    const html = `
        <div class = "shopping-container">
          <div class = "shopping-close" onclick = "shoppingPage.handleClear();"></div>
          <table>
          ${htmlCatalog}
                <tr>
                    <td class = "shopping-name">Сумма:</td>
                    <td class = "shopping-price">${sumCatalog.toLocaleString()}Р</td>
                </tr>
          </table>

         
        </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
