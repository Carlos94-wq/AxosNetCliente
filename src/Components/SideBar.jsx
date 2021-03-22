import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SideBar = () => {

    const Toggle = useSelector(state => state.Toggle);
    
    return (
        <nav id="sidebar" className={ `${ ( Toggle ) ? 'active' : '' }` }>
            <div className="sidebar-header">
                <p>Invoice App</p>
            </div>
            <Link className="nav__link" to="/Dashboard/NewInvoce">
                <i className="fa fa-plus" aria-hidden="true"></i>
                New Invoice
            </Link>
            <Link className="nav__link" to="/Dashboard/Invoices">
                <i className="fa fa-file" aria-hidden="true"></i>
            Invoice List
            </Link>
        </nav>
    )
}
