import Product from "../models/Product";

import classicTee from '../resources/images/classic-tee.jpg'

const productData = [
    new Product({
        id: 'PRODUCT-01',
        key: 'PRODUCT-01-CT1',
        name: 'Classic Tee',
        imageUrl: classicTee,
        sizes: { s: true, m: false, l: false },
        price: '75.00',
        quantity: 1,
        description: `Dolor sit amet, consectetur, adipiscing elit. 
                      Haec et tu ita posuisti, et verba vestra sunt.
                      Quod autem ratione actum est, id officium appellamus
                      dolor sit amet, consectetur adipiscing elit. 
                      Haec et tu ita posuisti, et verba vestra sunt. 
                      Quod autem ratione actum est, id officium appellamus`,
    }),
    new Product({
        id: 'PRODUCT-01',
        key: 'PRODUCT-01-CT2',
        name: 'Classic Tee',
        imageUrl: classicTee,
        sizes: { s: false, m: false, l: true },
        price: '75.00',
        quantity: 3,
        description: `Dolor sit amet, consectetur, adipiscing elit. 
                      Haec et tu ita posuisti, et verba vestra sunt.
                      Quod autem ratione actum est, id officium appellamus
                      dolor sit amet, consectetur adipiscing elit. 
                      Haec et tu ita posuisti, et verba vestra sunt. 
                      Quod autem ratione actum est, id officium appellamus`,
    }),
];

const initViewedProduct = new Product({
    id: 'PRODUCT-01',
    key: 'PRODUCT-01-CT',
    name: 'Classic Tee',
    imageUrl: classicTee,
    sizes: { s: false, m: false, l: false },
    price: '75.00',
    quantity: 1,
    description: `Dolor sit amet, consectetur, adipiscing elit. 
                  Haec et tu ita posuisti, et verba vestra sunt.
                  Quod autem ratione actum est, id officium appellamus
                  dolor sit amet, consectetur adipiscing elit. 
                  Haec et tu ita posuisti, et verba vestra sunt. 
                  Quod autem ratione actum est, id officium appellamus`,
})

export {
    productData,
    initViewedProduct,
};