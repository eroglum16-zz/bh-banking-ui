import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccountCard from "./AccountCard";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomerInfo = ({customer, errorMessage}) => {
    return (
        <Box style={{marginTop: 30}}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {customer &&
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h4" align="center">
                        {customer.name} {customer.surname}
                    </Typography>
                    <Typography variant="subtitle1" align="center" style={{color: '#666'}}>
                        {customer.email}
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container
                          spacing={1}
                          style={{marginTop: 20, height: 250, overflow: 'auto'}}>
                        {customer.accounts.map((account) => (
                            <Grid key={account.accountId} xs={6} item>
                                <AccountCard account={account}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            }
        </Box>
    )
};

export default CustomerInfo;
