import React from 'react';
import TopBar from "./TopBar";
import {Route, Switch} from 'react-router';
import CustomerPage from "../pages/customer/CustomerPage";
import AccountPage from "../pages/account/AccountPage";

const Layout = () => {
    return (
        <React.Fragment>
            <TopBar/>
            <Switch>
                <Route path={['/', '/customer']} component={CustomerPage} exact={true} />
                <Route path="/account" component={AccountPage} exact={true} />
            </Switch>
        </React.Fragment>
    )
};

export default Layout;
