import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddIcon from '@material-ui/icons/Add';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles({
    root: {
        width: 400,
        background: '#f0f0f0',
        position: 'fixed',
        bottom: 30
    },
});

const Navigation = ({value, setValue}) => {
    const classes = useStyles();

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="New" icon={<AddIcon/>}/>
            <BottomNavigationAction label="Info" icon={<ContactMailIcon/>}/>
        </BottomNavigation>
    );
};

export default Navigation;
