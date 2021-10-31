import React, { FC } from 'react';
import { TextField as MUITextField, TextFieldProps } from '@mui/material';
import useStyles from './TextField.css';
import clsx from 'clsx';

type TTextField = TextFieldProps & { mb?: boolean }

const TextField: FC<TTextField> = (props) => {
  const styles = useStyles();
  
  return(
    <MUITextField
      {...props}
      className={styles.textField}
      sx={props.mb === true ? { marginBottom: 2 } : undefined }
    />
  )
}

export default TextField