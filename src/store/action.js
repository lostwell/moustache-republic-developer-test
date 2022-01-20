const ADD_TO_CART = 'ADD_TO_CART';
const TOGGLE_MINI_CART = 'TOGGLE_MINI_CART';
const SET_VIEWED_PRODUCT = 'SET_VIEWED_PRODUCT';

const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

const toggleMiniCart = () => ({
    type: TOGGLE_MINI_CART,
});

const setViewedProduct = (product) => ({
    type: SET_VIEWED_PRODUCT,
    payload: product,
})


export {
    ADD_TO_CART,
    TOGGLE_MINI_CART,
    SET_VIEWED_PRODUCT,
    addToCart,
    toggleMiniCart,
    setViewedProduct,
};