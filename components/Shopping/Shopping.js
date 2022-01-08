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
        <div class = "shopping-wrapper">
          
            <div class = "shopping-close" onclick = "shoppingPage.handleClear();"></div>
              <div class = "shopping-list">
                <table>
                 ${htmlCatalog}
                  <tr>
                    <td class = "shopping-name">Сумма:</td>
                    <td class = "shopping-price">${sumCatalog.toLocaleString()}Р</td>
                  </tr>
                </table>
              </div>
          
            <div class = "shopping-form">
              <form>
                <span class = "shopping-span">Оформить заказ</span>
                <p class = "shopping-input">
                  <label for="firstname">Имя</label>
                  <input type="text" id="firstname" name="user_name">
                </p>
                <p class = "shopping-input">
                  <label for="lastname">Фамилия</label>
                  <input type="text" id="lastname" name="user_lastname">
                </p>
                <p class = "shopping-input">
                  <label for="address">Адрес</label>
                  <input type="text" id="address" name="user_address">
                </p>
                <p class = "shopping-input">
                  <label for="email">E-mail</label>
                  <input type="email" id="email" name="user_email">
                </p>
                <p class = "shopping-input">
                  <label for="tel">Телефон</label>
                  <input type="tel" id="tel" name="user_tel">
                </p>
                <div class = "shopping-btnContainer">
                <button  type="submit">Оформить заказ</button>
              </div>
              </form>
              
            </div>
            
        </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
