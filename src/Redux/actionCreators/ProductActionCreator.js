export function addProductsFromApi (payload) {
    return {
        type: 'addProductsFromApi',
        payload: payload
    }
}

export function addNewProduct (payload) {
    return {
        type: 'addNewProduct',
        payload: payload
    }
}

export function addArrayOfNewProducts (payload) {
    return {
        type: 'addArrayOfNewProducts',
        payload: payload
    }
}

export function deleteProduct (payload) {
    return {
        type: 'deleteProduct',
        payload: payload
    }
}