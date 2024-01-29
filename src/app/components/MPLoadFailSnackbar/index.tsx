import { Fragment } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

type MPLoadFailSnackbarProps = {
  didMPsLoadFail: boolean,
  setDidMPsLoadFail: any
}
const MPLoadFailSnackbar = ({ didMPsLoadFail, setDidMPsLoadFail }: MPLoadFailSnackbarProps) => {
  const closeSnackbar = () => setDidMPsLoadFail(false);
  return (
    <Snackbar
      open={didMPsLoadFail}
      autoHideDuration={60000}
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
        Failed to load MPs to select, please reload the page or try again later.
      </Alert>
    </Snackbar>
  );
};

export default MPLoadFailSnackbar;
