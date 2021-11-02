import React, { FC } from 'react';
import { TextField as MUITextField, TextFieldProps } from '@mui/material';
import useStyles from './TextField.css';

interface ITextField {
  mb?: boolean;
}

type TTextField = TextFieldProps & ITextField

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
export type { TTextField }