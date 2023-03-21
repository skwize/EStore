export function addItem (payload) {
    return {
        type: 'addItem',
        payload: payload
    }
}

export function addItemsFromStorage (payload) {
    return {
        type: 'addItemsFromStorage',
        payload: payload
    }
}

export function removeItem (payload) {
    return {
        type: 'removeItem',
        payload: payload
    }
}

export function clearBasket () {
    return {
        type: 'clearBasket',
    }
}