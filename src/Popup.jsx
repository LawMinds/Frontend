import React from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';

const SlideTransition = (props) => {
  return <Slide {...props} direction="down" />;
};

const SnackbarComponent = ({ open, type, message, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
