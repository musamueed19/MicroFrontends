// generate list of products and show them
// no need to worry about to render to anyhing like screen

// generae list of products - using faker module to generate fake data

import {faker} from "@faker-js/faker";

let products = '';

for (let i = 0; i < 50; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}

document.querySelector('#products-list').innerHTML = products;