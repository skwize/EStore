import { authenticate, logout } from "../actions/userAction";

function user (state = {}, action){
    switch ( action.type ) {
        case authenticate: return action.payload
        case logout: return {}
        default: return state
    }
}

export default user