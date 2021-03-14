import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomerForm from "./components/CustomerForm";
import Navigation from "./components/Navigation";
import CustomerSearch from "./components/CustomerSearch";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

const CustomerPage = () => {
    const classes = useStyles();
    const [activePage, setActivePage] = useState(0);

    return (
        <Container className={classes.cardGrid}>
            <Typography align="center" variant="h3" gutterBottom>
                Customer
            </Typography>
            <Container maxWidth="xs">
                {activePage === 0 ?
                    <CustomerForm/> :
                    <CustomerSearch/>
                }
            </Container>
            <Container maxWidth="xs">
                <Navigation value={activePage} setValue={setActivePage} />
            </Container>
        </Container>
    );
};

export default CustomerPage;
