import React, { useContext } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { CommonContext } from '../Context/CommonContext';

export const Loader = () => {
    const { state } = useContext(CommonContext)
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={state?.pageLoading}
        >
            <CircularProgress color="warning" />
        </Backdrop>
    )
}
