const getToken = ()=>{

    const UserSession = JSON.parse(sessionStorage.getItem('UserSesion')) || { token: false };
    return UserSession.token;
    
}

export const fetchingData = ( url, method, data) =>{
    
    if ( method === 'POST' || method === "PUT") {
        return fetch( url, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        })
    } 
    else {
        return fetch( url, {
            method,
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
    }
}