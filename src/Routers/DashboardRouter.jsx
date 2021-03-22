import React from 'react';
import { Route, Switch } from 'react-router';
import { NavBar } from '../Components/NavBar';
import { SideBar } from '../Components/SideBar';
import { InvoiceList } from '../Pages/Invoice/InvoiceList';
import { InvoiceScreen } from '../Pages/Invoice/InvoiceScreen';

export const DashboardRouter = () => {
    return (
    <div className="wrapper">

        <SideBar />

        <div id="content">

        <NavBar />

            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                <Switch>
                    <Route path='/Dashboard/NewInvoce' component={ InvoiceScreen }/>
                    <Route path='/Dashboard/Invoices' component={ InvoiceList }/>
                </Switch>
              </div>
              
        </div>    
      </div>
    )
}
