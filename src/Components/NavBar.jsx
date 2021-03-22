import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/Actions/authActions';
import { onCollapseToggle } from '../Store/Actions/uiActions';
import jwt_decode from "jwt-decode";

export const NavBar = () => {

    const dispatch = useDispatch();
    const Auth = useSelector(state => state.Auth);
    var decoded = jwt_decode(Auth.token);


    return (
    <nav className="navbar shadow mb-5 bg-white rounded navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <button onClick={ () => dispatch(onCollapseToggle()) } type="button" id="sidebarCollapse" className="btn btn-info">
                <i style={{ color:'#000' }} className="fa fa-align-left"></i>
            </button>

           <p>Welcome { decoded.UserName  }</p>

            <button onClick={ () => dispatch(logout()) } type="button" className="btn btn-danger">
                <i style={{ color:'#000' }} className="fa fa-lock"></i>
            </button>
        </div>
    </nav>
    )
}
