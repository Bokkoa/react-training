// // Objects

// const product = {
//     name: 'Tablet',
//     price: 300,
//     available: false,
// }

// // freeze doesnt allow to add or delete new properties, nor rewrite
// Object.freeze(product);

// // seal doesnt allow to add or delete new properties, but rewrite does
// Object.seal()


// // rewrite value
// product.available = true;

// // property added if not exists
// product.image = 'yeah.jpg';

// // deleting a property
// delete product.price;

// console.log(product)