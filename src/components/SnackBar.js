"use client";

import React, { useContext } from 'react'
import MUISnackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert';
import { CommonContext, initialValues } from '../Context/CommonContext'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBar = () => {
    const { state, dispatch } = useContext(CommonContext)

    const handleClose = () => dispatch({ type: 'enableToaster', payload: initialValues.toaster })
    return (
        <MUISnackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={state?.toaster?.show}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={state?.toaster?.type} sx={{ width: '100%' }}>
                {state?.toaster?.message}
            </Alert>
        </MUISnackbar>
    )
}
