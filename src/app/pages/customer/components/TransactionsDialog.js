import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import TransactionTable from "./TransactionTable";

const TransactionDialog = ({onClose, open, transactions}) => {
    return (
        <Dialog maxWidth="xl"
                onClose={onClose}
                aria-labelledby="transactions-dialog-title"
                open={open}>
            <TransactionTable transactions={transactions}/>
        </Dialog>
    );
};

export default TransactionDialog;
