 // returna la info que este en el WebStorage o un onjeto con la finalidad de que la autenticacion precista en el store
const init = () => {
    return JSON.parse(sessionStorage.getItem('UserSesion')) || { logged: false }
}

export const authReducer = (state = init(), action) => {
    switch (action.type) {
        case '[Auth] LOGIN':
            
            return{
                token: action.payload,
                logged: true
            };

        case '[Auth] LOGOUT':
            return {
                logged: false
            };
    
        default:
            return state; // el reduer siempre tiene que retornar un stado innicial
    }
}