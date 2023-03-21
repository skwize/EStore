import { addArrayOfNewProducts, addProductsFromApi, addNewProduct, deleteProduct } from '../actions/productsAction'

function products (state = [], action) {
    switch (action.type){

        case addProductsFromApi: return [action.payload]
        case addNewProduct: return [...state, action.payload]
        case addArrayOfNewProducts: return [...state, ...action.payload]
        case deleteProduct: return [...state.filter(product => product !== state[action.payload])]

        default: return state
    }
}

export default products