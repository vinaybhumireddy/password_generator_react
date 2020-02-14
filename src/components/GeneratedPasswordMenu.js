import React from 'react'
import Textfield from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'


const GeneratedPasswordMenu = (props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Textfield 
                    variant = "outlined"
                    value = {props.generatedPassword} 
                    helperText = {props.passwordStrength}
                    readOnly 
                />
            </Grid>
        </>           
    )
}

export default GeneratedPasswordMenu