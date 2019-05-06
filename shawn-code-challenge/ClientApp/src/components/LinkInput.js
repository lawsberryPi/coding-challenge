import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


// import TextField from '@material-ui/core/TextField';

const LinkInput = () =>{
    return(
        <div>
        <form>
            <label>
                Add a Link:
                <input type="text" name="name" />
            </label>
            <Button variant="contained">
             Submit
            </Button>       
         </form>
        </div>
    )
}
export default LinkInput