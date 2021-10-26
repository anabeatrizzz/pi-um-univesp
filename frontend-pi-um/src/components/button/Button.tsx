// @ts-nocheck
import React, { FC } from 'react';
import { Button as MUIButton } from '@mui/material';
import { button } from './Button.css'

interface IButton {
  text: string;
  onClick?: Function;
  href?: string;
}

const Button: FC<IButton> = (props) => {
  return (
    <MUIButton
      href={props.href}
      disableElevation
      style={button}
      variant="contained"
      onClick={props.onClick}
    >
      {props.text}
    </MUIButton>
  )
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button