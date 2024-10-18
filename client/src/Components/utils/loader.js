import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ full }) => (
    <div className={`text-center m-20  ${full ? 'mt-1/2':''}`}>
    <CircularProgress/>
</div>
)

export default Loader;