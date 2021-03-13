import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {createAccount} from '../../../service/accountService';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    }
}));

const emptyForm = {customerId: '', initialCredit: ''};

const AccountForm = () => {
    const classes = useStyles();
    const [form, setForm] = useState(emptyForm);
    const [open, setOpen] = useState(false);
    const [feedback, setFeedback] = useState({});
    const [formError, setFormError] = useState({});
    const [requestPending, setRequestPending] = useState(false);

    const requireFields = (errors) => {
        const requiredFields = Object.keys(errors)
            .filter(field => !!errors[field])
            .join(', ');

        setFeedback({
            severity: 'error',
            message: `Please fill required fields: ${requiredFields}`
        });
        openSnackbar();
    };

    const validateForm = () => {
        const errors = {};
        let valid = true;

        Object.keys(form)
            .filter(field => !form[field])
            .forEach(field => {
                errors[field] = true;
                valid = false;
            });
        setFormError(errors);

        if (!valid) requireFields(errors);

        return valid;
    };

    const resetForm = () => {
        setForm(emptyForm);
        setFormError({});
    };

    const onSubmit = () => {
        if (!validateForm()) return;

        setRequestPending(true);
        createAccount(form)
            .then(res => {
                resetForm();
                setFeedback({
                    severity: 'success',
                    message: `You have successfully opened an account with id ${res.data.accountId}.`
                });
            })
            .catch(error => {
                let message;
                if (!error.response) {
                    message = 'Server is not responding, please try in a bit!';
                } else if (error.response.status === 404) {
                    message = `No customer was found with the given id (${form.customerId}).`;
                } else {
                    message = 'An error occurred while opening an account!';
                }
                setFeedback({severity: 'error', message});
            })
            .finally(() => {
                setRequestPending(false);
                openSnackbar();
            });
    };

    const openSnackbar = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.paper}>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="customerId"
                            variant="outlined"
                            required
                            fullWidth
                            id="customerId"
                            error={formError.customerId}
                            value={form.customerId}
                            onChange={({target}) => setForm({...form, customerId: target.value})}
                            label="Customer ID"
                            type="text"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="initialCredit"
                            label="Initial Credit"
                            name="initialCredit"
                            type="number"
                            error={formError.initialCredit}
                            value={form.initialCredit}
                            onChange={({target}) => setForm({...form, initialCredit: target.value})}
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
                    Open Account
                </Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={feedback.severity}>
                    {feedback.message}
                </Alert>
            </Snackbar>
            <Backdrop className={classes.backdrop} open={requestPending}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
};

export default AccountForm;
