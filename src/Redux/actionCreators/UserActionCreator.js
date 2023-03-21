export function authenticate (payload) {
    return {
        type: 'authenticate',
        payload: payload
    }
}

export function logout (payload) {
    return {
        type: 'logout',
        payload: payload
    }
}