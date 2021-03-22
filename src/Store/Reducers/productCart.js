export const productReducer = (state = [], action) => {
    switch (action.type) {
        case '[PRODUCT] ADD':
            
            return [ ...state, action.payload ];

        case '[PRODUCT] DELETE':
            return state.filter( state => state.ProductId !== action.payload ) //regresa un arreglo nuevo sin el elemento que borraste
    
        default:
            return state; // el reduer siempre tiene que retornar un stado innicial
    }
}

export const total = ( state = 0, action ) => {
    switch (action.type) {
        case '[PRODUCT] TOTAL':
            
            return state + action.payload

        default:
            return state; // el reduer siempre tiene que retornar un stado innicial
    }
}