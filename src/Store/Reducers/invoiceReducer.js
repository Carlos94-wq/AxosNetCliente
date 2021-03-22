export const invoiceReducer = (state = [], action) => {
    switch (action.type) {
        case '[INVOICE] READ':
            
            return action.payload

        case '[INVOICE] DELETE':
            return state.filter( state => state.InvoiceId !== action.payload ) //regresa un arreglo nuevo sin el elemento que borraste
    
        default:
            return state; // el reduer siempre tiene que retornar un stado innicial
    }
}

export const GetInvoice = (state = 0, action) => {
    switch (action.type) {
        case '[INVOICE] GET_ID':
            
            return action.payload
    
        default:
            return state; // el reduer siempre tiene que retornar un stado innicial
    }
}

export const InvoiceOpions = ( state = {}, action ) => {
    switch (action.type) {
        case '[INVOICE] OPTIONS':
            
            return action.payload;
    
        default:
            return state;
    }
}