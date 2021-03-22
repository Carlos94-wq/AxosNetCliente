import Swal from "sweetalert2";
import { fetchingData } from "../Helpers/fetchingData"
import { authLoader, recoverLoader, registerLoader, } from "./uiActions";

//middlewares
export const StartLogin =( credentials )=>{

    return ( dispatch ) =>{  //dispatch, fuincion proporcionada por thunk

        dispatch(authLoader());
        
        const req = fetchingData(`${process.env.REACT_APP_API_URL}/Auth/Login`, 'POST', credentials);
        req.then( b => {

            if (b.status === 200) {

               return b.json(); // si el estatus es 200 directamente retornas el cuerpo de la respuesta
               
            } 

            if (b.status === 400) {

                Swal.fire('No user found')

            }
           
        })
        .then( ( resp ) => { 

            dispatch(authLoader());
            dispatch(login(resp.data))
           
        }).catch( e => e );
        
    }
}

export const recoverPassword = ( values, reset ) => {

    return ( dispatch ) => {

        dispatch(recoverLoader());
        
        const querys = `?email=${values.email}&newPassword=${values.newPassword}`;
        const req = fetchingData(`${process.env.REACT_APP_API_URL}/Auth/RecoverPassword${querys}`, 'GET', {});

        req.then( b => b.json() )
        .catch( e =>{ console.log(e) })
        .then( resp => { 

           if (resp.data) { 

                dispatch(recoverLoader());
                Swal.fire(`Done! your password has been recovered, let's check it out in your inbox!`);
                reset();

           }

        }); 

    }
}

export const registerUser = ( values ) => {

    return ( dispatch ) => {

        dispatch(registerLoader());
        
        const req = fetchingData(`${process.env.REACT_APP_API_URL}/Auth/Register`, 'POST', values);
        req.then( b => {

            if ( b.status === 200 ) {
                return b.json();
            }

            if ( b.status === 400 ) {
                Swal.fire('No user found')
            }
            
        })
        .then( resp => { 

            dispatch(login(resp.data));
            dispatch(registerLoader());

        });

    }

}

//acions
const login = ( userToken ) =>{
    return{
        type: '[Auth] LOGIN',
        payload: userToken
    }
}

//como no es un proceso aincrono no hay necesidad de 
//pasarlo por un middleware por eso se puede exportar
export const logout = () =>{
    return{
        type: '[Auth] LOGOUT'
    }
}