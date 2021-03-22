import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
    BrowserRouter as Router, 
    Switch
} from 'react-router-dom';

//Componentes
import { AuthScreen } from '../Pages/Auth/AuthScreen';
import { RegisterScreen } from '../Pages/Auth/RegisterScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    // hook que nos ayuda a obtener una parte especificada del store
    const Auth = useSelector(state => state.Auth);

    useEffect(() => {

        { /*
            este efectto se ejecurara en cada ocacion que el la autenticacion cambie
            y percista en el store
        */ }

        sessionStorage.setItem('UserSesion', JSON.stringify(Auth));
        
    }, [ Auth ]) 

    return (
        <Router>
            <Switch>
                <PublicRoute exact path='/' component={ AuthScreen } IsAuthenticated={ Auth.logged }/>
                <PublicRoute exact path='/Register' component={ RegisterScreen } IsAuthenticated={ Auth.logged }/>
                <PrivateRoute path='/Dashboard' component={ DashboardRouter } IsAuthenticated={ Auth.logged }/>
            </Switch>
        </Router>
    )
}
