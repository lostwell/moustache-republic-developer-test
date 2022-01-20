import { ADD_TO_CART, TOGGLE_MINI_CART, SET_VIEWED_PRODUCT } from "./action";
import { productData, initViewedProduct } from "./data";
import { resolveSize } from "../util/util";
import Product from "../models/Product";

const initialState = {
    viewedProduct: initViewedProduct,
    isMiniCartToggled: false,
    cart: [...productData],
    invalidAddition: false,
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){ 
        case ADD_TO_CART:
            if(resolveSize(payload.sizes) === '') return { ...state, invalidAddition: true};

            const result = [...state.cart];
            const index = state.cart.findIndex((curr)=> (
                curr.id === payload.id && resolveSize(curr.sizes) === resolveSize(payload.sizes)
            ));

            if(index >= 0){
                const oldItem = result[index];
                result[index] = new Product({
                    id: oldItem.id,
                    key: oldItem.key,
                    name: oldItem.name,
                    imageUrl: oldItem.imageUrl,
                    sizes: {...oldItem.sizes},
                    price: oldItem.price,
                    quantity: oldItem.quantity + 1,
                    description: oldItem.description,
                });
            } else{
                result.push(new Product({
                    id: payload.id,
                    key: payload.key,
                    name: payload.name,
                    imageUrl: payload.imageUrl,
                    sizes: {...payload.sizes},
                    price: payload.price,
                    quantity: payload.quantity,
                    description: payload.description,
                }));
            }

            return {
                ...state, 
                cart: result,
            }

        case TOGGLE_MINI_CART:
            return {
                ...state,
                isMiniCartToggled: !state.isMiniCartToggled,
            }
        
        case SET_VIEWED_PRODUCT:
            return {
                ...state,
                viewedProduct: payload,
                invalidAddition: false,
            }

        default:
            return state;
    }
};

export { 
    reducer as default,
    initialState,
};