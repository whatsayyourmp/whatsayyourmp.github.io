import { Fragment } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

const LoadFailSnackbar = ({ didCountLoadFail, setDidCountLoadFail }) => {
  const closeSnackbar = () => setDidCountLoadFail(false);
  return (
    <Snackbar
      open={didCountLoadFail}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      message=""
      action={
        <Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      }
    >
      <Alert
        onClose={closeSnackbar}
        severity="error"
        variant="filled"
        sx={{ width: '100%' }}
      >
        Failed to load the counts, please try again
      </Alert>
    </Snackbar>
  );
};

export default LoadFailSnackbar;
