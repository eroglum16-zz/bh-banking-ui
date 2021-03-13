import React from 'react';
import {Container} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountForm from "./components/AccountForm";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

const AccountPage = () => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid}>
            <Typography align="center" variant="h3" gutterBottom>
                Account
            </Typography>
            <Container maxWidth="xs">
                <AccountForm/>
            </Container>
        </Container>
    );
};

export default AccountPage;
