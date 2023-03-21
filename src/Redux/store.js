import { combineReducers, legacy_createStore as createStore } from "redux"
import products from "./Reducers/productsReducer"
import basket from "./Reducers/basketReducer"
import user from "./Reducers/userReduce"

const rootReducer = combineReducers({
    products,
    basket,
    user
})

const store = createStore(rootReducer)

export default store