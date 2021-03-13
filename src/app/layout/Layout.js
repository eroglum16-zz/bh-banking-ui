import React from 'react';
import TopBar from "./TopBar";
import {Route, Switch} from 'react-router';
import CustomerPage from "../pages/customer/CustomerPage";

const Layout = () => {
    return (
        <React.Fragment>
            <TopBar/>
            <Switch>
                <Route path={['/', '/customer']} component={CustomerPage} exact={true} />
            </Switch>
        </React.Fragment>
    )
};

export default Layout;
