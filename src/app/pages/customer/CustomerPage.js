import React from 'react';
import {Container} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomerForm from "./components/CustomerForm";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

const CustomerPage = () => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid}>
            <Typography align="center" variant="h3" gutterBottom>
                Customer
            </Typography>
            <Container maxWidth="xs">
                <CustomerForm/>
            </Container>
        </Container>
    );
};

export default CustomerPage;
