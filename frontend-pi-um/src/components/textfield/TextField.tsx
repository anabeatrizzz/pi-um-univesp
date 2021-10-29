import React, { FC } from 'react';
import { TextField as MUITextField, TextFieldProps } from '@mui/material';
import useStyles from './TextField.css';

const TextField: FC<TextFieldProps> = (props) => {
  const styles = useStyles();
  
  return(
    <MUITextField
      {...props}
      className={styles.textField}
    />
  )
}

export default TextField