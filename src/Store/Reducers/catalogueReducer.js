export const supplier = (state = [], action) => {
    switch (action.type) {
        case '[CATALOGUE] SUPPLIERS':
            
            return action.payload;
    
        default:
            return state;
    }
}

export const product = ( state = [], action ) => {
    switch (action.type) {
        case '[CATALOGUE] PRODUCTS':
            
            return action.payload;
    
        default:
            return state;
    }
}

export const status = ( state = [], action ) => {
    switch (action.payload) {
        case '[CATALOGUE] STATUS':
            
            return action.payload;
    
        default:
            return state;
    }
}