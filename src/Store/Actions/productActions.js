import Swal from "sweetalert2";
import { fetchingData } from "../Helpers/fetchingData";
import { invoiceLoader } from "./uiActions";

export const StartAdd = ( detail )=>{
    return ( dispatch ) => {
        const req = fetchingData(`${process.env.REACT_APP_API_URL}/InvoiceDetail`, 'POST', detail);
        req.then( b => {

            if (b.status === 200) {

               return b.json(); // si el estatus es 200 directamente retornas el cuerpo de la respuesta
               
            } 

            if ( b.status == 401 ) {
                console.log('dsad')
            }

        })
        .then( ( resp ) => { 

           if (resp.data) {
             dispatch( invoiceLoader() );
             Swal.fire('Your payment  has been completed');
           }
           
        });
    }
}

export const AddTocart = ( detail ) => {
    return {
        type: '[PRODUCT] ADD',
        payload: detail
    }
}

export const DeleteFromCart = ( id ) => {
    return {
        type: '[PRODUCT] DELETE',
        payload: id
    }
}

export const sumTotal = ( price ) => {
    return {
        type: '[PRODUCT] TOTAL',
        payload: price
    }
}