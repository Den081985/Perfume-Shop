class Products {
    render() {
        let htmlCatalog = ``;

        CATALOG.forEach(({id, name, price, img}) => {
            htmlCatalog += `
                <li class = "products-element">
                    <span class = "products-element-name">${name}</span>
                    <img class = "products-element-img" src = "${img}"/>
                    <span class = "products-element-price">Цена: ${price.toLocaleString()}P</span>
                    <button class = "products-element-btn">Добавить в кoрзину</button>
                </li>
            
            `
            const html = `
                <ul class = "products-container">${htmlCatalog}</ul>
            
            `
            ROOT_PRODUCTS.innerHTML = html;
        })
    }
}

const productsPage = new Products();
productsPage.render();