import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {createCustomer} from '../../../service/customerService';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const CustomerForm = () => {
    const classes = useStyles();
    const [form, setForm] = useState({});

    const onSubmit = () => {
        createCustomer(form)
            .then(data => {
                setForm({});
            });
    };

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Create Customer
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            value={form.name}
                            onChange={({target}) => setForm({...form, name: target.value})}
                            label="First Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={form.surname}
                            onChange={({target}) => setForm({...form, surname: target.value})}
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={form.email}
                            onChange={({target}) => setForm({...form, email: target.value})}
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            type="text"
                            id="phone"
                            value={form.phone}
                            onChange={({target}) => setForm({...form, phone: target.value})}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={onSubmit}
                >
                    Save
                </Button>
            </form>
        </div>
    );
};

export default CustomerForm;
