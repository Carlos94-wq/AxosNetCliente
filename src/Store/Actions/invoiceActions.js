import Swal from "sweetalert2";
import { invoiceQueryFilters } from "../Constants/QueryFilter";
import { fetchingData } from "../Helpers/fetchingData";
import { invoiceLoader } from "./uiActions";

export const CreateInvoice = ( invoice ) => {
    return ( dispatch ) => {
        
        const req = fetchingData(`${process.env.REACT_APP_API_URL}/Invoice`, 'POST', invoice);
        req.then( b => {

            if (b.status === 200) {

               return b.json(); // si el estatus es 200 directamente retornas el cuerpo de la respuesta
               
            } 

            if ( b.status == 401 ) {
                Swal.fire('Your sesion has been expire');
            }

        })
        .then( ( resp ) => { 

           if (resp.data) {
             dispatch(invoiceLoader());
             dispatch(getid(resp.data));
           }
           
        });

    }
}

export const StartReadInvoice = ( filters = invoiceQueryFilters ) => {
    return ( dispatch ) => {

        //#region filters
        const url = `${process.env.REACT_APP_API_URL}/Invoice?PageSize=${filters.PageSize}&PageNumber=${filters.PageNumber}&UserId=${ filters.UserId }&supplierId=${filters.SupplierId}&InvoiceDate=${filters.InvoiceDate}`;
        //#endregion
         
        const req = fetchingData(url, 'GET', {});
        req.then( b => {

            if (b.status === 200) {

               return b.json(); // si el estatus es 200 directamente retornas el cuerpo de la respuesta
               
            } 

            if ( b.status === 401 ) {
                Swal.fire('Your sesion has been expire');
            }

            if ( b.status === 400 ) {
                Swal.fire('No info');
                return;
            }

        })
        .then( resp  => { 

            const response = resp === undefined ? [] :  resp.data;
            const metadata = resp === undefined ? [] :  resp.metadata 
            dispatch( readData(response) );
            dispatch( setOptions(metadata) );
           
        });
    }
}

const getid = ( id ) => {
    return {
        type: '[INVOICE] GET_ID',
        payload: id
    }
}

const readData = ( data ) => {
    return {
        type:'[INVOICE] READ',
        payload: data
    }
}

const setOptions = ( data ) => {
    return {
        type:'[INVOICE] OPTIONS',
        payload: data
    }
}