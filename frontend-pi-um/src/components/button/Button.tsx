import React, { FC } from 'react';
import { Button as MUIButton} from '@mui/material';
import { button } from './Button.css'

interface IButton {
  text: string;
}

const Button: FC<IButton> = (props) => {
  return (
    <MUIButton
      disableElevation
      style={button}
      variant="contained"
    >
      {props.text}
    </MUIButton>
  )
}

export default Button