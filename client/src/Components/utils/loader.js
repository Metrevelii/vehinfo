import React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';

const Loader = ({ full }) => (
    <div className={`text-center m-20  ${full ? 'm-[50vh]':'mt-1/2'}`}>
        Loading ...
    </div>
)

export default Loader;