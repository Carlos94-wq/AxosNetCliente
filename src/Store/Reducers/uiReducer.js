export const authLoader = (state = false, action) => {
    switch (action.type) {
        case '[Auth_LOADER] START':
            
            return !state
    
        default:
            return state; // el reduer siempre tiene que retornar un stado innicial
    }
}

export const recoverLoader = (state = false, action) => {
    switch (action.type) {
        case '[RECOVER_LOADER] START':
            
            return !state;
    
        default:
            return state;
    }
}

export const registerLoader = (state = false, action) => {
    switch (action.type) {
        case '[REGISTER_LOADER] START':
            
            return !state;
    
        default:
            return state;
    }
}

export const invoiceLoader = (state = false, action) => {
    switch (action.type) {
        case '[INVOICE_LOADER] START':
            
            return !state
    
        default:
            return state; // el reduer siempre tiene que retornar un stado innicial
    }
}

export const SideBarTogle = (state = false, action) => {
    switch (action.type) {
        case '[TOGLE] START':
            
            return !state
    
        default:
            return state; // el reduer siempre tiene que retornar un stado innicial
    }
}