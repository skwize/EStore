import { addItem, addItemsFromStorage, clearBasket, removeItem } from '../actions/basketAction'

function basket (state = [], action) {
    switch (action.type) {
        case addItem: return state.length ? [...state, action.payload] : [action.payload]
        case removeItem: return [...state.filter(item=> item !== state[action.payload])]
        case addItemsFromStorage: return state.length ? [...state, ...action.payload] : [...action.payload]
        case clearBasket: return []
        default: return state
    }
}

export default basket