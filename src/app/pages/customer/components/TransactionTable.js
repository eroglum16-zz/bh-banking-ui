import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    columnHeader: {
        fontWeight: 'bold'
    }
});

const TransactionTable = ({transactions}) => {
    const classes = useStyles();

    const formatDate = (date) => {
        date = new Date(date);
        return date.toLocaleString();
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Transaction table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.columnHeader}>Description</TableCell>
                        <TableCell className={classes.columnHeader} align="center">Amount</TableCell>
                        <TableCell className={classes.columnHeader} align="center">Balance</TableCell>
                        <TableCell className={classes.columnHeader} align="center">Date & Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.length === 0 &&
                    <TableRow>
                        <TableCell component="th" scope="row">
                            No transaction was made on this account so far.
                        </TableCell>
                    </TableRow>
                    }
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.transactionId}>
                            <TableCell component="th" scope="row">
                                {transaction.description}
                            </TableCell>
                            <TableCell align="center">{transaction.amount}</TableCell>
                            <TableCell align="center">{transaction.balance}</TableCell>
                            <TableCell align="center">{formatDate(transaction.createdAt)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TransactionTable;
