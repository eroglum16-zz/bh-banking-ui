import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const CustomerSearch = ({onSearch}) => {
    const [value, setValue] = useState('');
    return (
        <Grid container style={{marginTop: 30}} justify="center">
            <Grid item xs={7}>
                <TextField id="customer-search"
                           placeholder="Customer ID"
                           type="search"
                           variant="outlined"
                           size="small"
                           value={value}
                           onChange={({target}) => setValue(target.value)}/>
            </Grid>
            <Grid item xs={3}>
                <Button color="primary"
                        variant="contained"
                        onClick={() => onSearch(value)}>
                    Search
                </Button>
            </Grid>
        </Grid>
    )
};

export default CustomerSearch;
