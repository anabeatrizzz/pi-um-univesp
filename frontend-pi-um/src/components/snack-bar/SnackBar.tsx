import React from 'react';
import { Snackbar as MUISnackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

interface ISnackBar {
  open: boolean | undefined;
  onClose: Function;
  msg: string | undefined;
}

export default function SnackBar(props: ISnackBar) {
  return (
    <MUISnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={props.open}
      autoHideDuration={3000}
      onClose={() => props.onClose()}
    >
      <Alert severity="info">
        {props.msg}
      </Alert>
    </MUISnackbar>
  )
}