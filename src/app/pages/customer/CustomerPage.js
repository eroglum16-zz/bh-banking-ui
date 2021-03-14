import React, {useState} from 'react';
import {Container, Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomerForm from "./components/CustomerForm";
import Navigation from "./components/Navigation";
import CustomerSearch from "./components/CustomerSearch";
import {getCustomer} from './../../service/customerService';
import CustomerInfo from "./components/CustomerInfo";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

const CustomerPage = () => {
    const classes = useStyles();
    const [activePage, setActivePage] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [customer, setCustomer] = useState();

    const doSearch = (customerId) => {
        setCustomer(undefined);
        getCustomer(customerId)
            .then(res => {
                setErrorMessage('');
                setCustomer(res.data);
            })
            .catch(error => {
                if (!error.response) {
                    setErrorMessage('Server is not responding, please try in a bit!');
                } else if (error.response.status === 404) {
                    setErrorMessage(`No customer was found with the given id (${customerId}).`);
                } else {
                    setErrorMessage('An error occurred while searching.');
                }
            })
    };

    return (
        <Container className={classes.cardGrid}>
            <Typography align="center" variant="h3" gutterBottom>
                Customer
            </Typography>
            <Container maxWidth="xs">
                {activePage === 0 ?
                    <CustomerForm/> :
                    <Box>
                        <CustomerSearch onSearch={doSearch}/>
                        <CustomerInfo customer={customer} errorMessage={errorMessage} />
                    </Box>
                }
            </Container>
            <Container maxWidth="xs">
                <Navigation value={activePage} setValue={setActivePage}/>
            </Container>
        </Container>
    );
};

export default CustomerPage;
