import { productsQueryFilters } from "../Constants/QueryFilter";
import { fetchingData } from "../Helpers/fetchingData"

export const GetSuppliers = () => {
    return (dispatch) =>{
       
        const req = fetchingData(`${process.env.REACT_APP_API_URL}/Catalogue/Suppliers`, 'GET', {});
        req.then( b => {
            if (b.status === 200) {

                return b.json()

            } 

            if (b.status === 401) {
                console.log('Your token has been expire or does not provide');
            }

        }).then( resp => {
            dispatch(supplier(resp.data))
        })
    }
}

export const GetProducts = ( filters = productsQueryFilters ) => {
    return (dispatch) =>{

        //#region QueryFilters
        const url = `${process.env.REACT_APP_API_URL}/Catalogue/Products?productName=${filters.productName}&initPrice=${filters.initPrice}&endPrice=${filters.endPrice}&pageNumber=${filters.pageNumber}&pageSize=${filters.pageSize}`
        //#endregion
        const req = fetchingData(url, 'GET', {});
        req.then( b => {
            if (b.status === 200) {

                return b.json()

            } 

            if (b.status === 401) {

                console.log('Your token has been expire or does not provide');

            }

        }).then( resp => {
            console.log(resp.data)
            dispatch(products(resp.data))
        })
    }
}

export const GetStatus = () => {
    return (dispatch) =>{
        
    }
}


const supplier = ( data ) => {
    return {
        type: '[CATALOGUE] SUPPLIERS',
        payload: data
    }
}

const products = ( data ) => {
    return {
        type:'[CATALOGUE] PRODUCTS',
        payload: data
    }
}

const status = ( data ) => {
    return {
        type: '[CATALOGUE] STATUS',
        payload: data
    }
}