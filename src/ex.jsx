import React, { useState } from 'react';
import { CssBaseline, Button } from '@mui/material';
import SnackbarComponent from './Popup';

function App() {
  const [snackbar, setSnackbar] = useState({ open: false, type: 'info', message: '' });

  const handleShowSnackbar = (type, message) => {
    setSnackbar({ open: true, type, message });
  };

  const handleCloseSnackbar = (event, reason) => {
    setSnackbar({ open: false, type: '', message: '' });
  };

  return (
    <div>
      <CssBaseline />
      <Button variant="contained" color="success" onClick={() => handleShowSnackbar('success', 'This is a success message!')}>
        Show Success Snackbar
      </Button>
      <Button variant="contained" color="error" onClick={() => handleShowSnackbar('error', 'This is an error message!')}>
        Show Error Snackbar
      </Button>
      <Button variant="contained" color="info" onClick={() => handleShowSnackbar('info', 'This is an info message!')}>
        Show Info Snackbar
      </Button>
      <SnackbarComponent
        open={snackbar.open}
        type={snackbar.type}
        message={snackbar.message}
        onClose={handleCloseSnackbar}
      />
    </div>
  );
}

export default App;
