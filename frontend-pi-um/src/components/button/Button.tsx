// @ts-nocheck
import React, { FC } from 'react';
import { Button as MUIButton } from '@mui/material';
import { button } from './Button.css'
import { colors } from "../../assets/variables"

interface IButton {
  text: string;
  onClick?: Function;
  href?: string;
  type?: string;
  bgColor?: string;
}

const Button: FC<IButton> = (props) => {
  return (
    <MUIButton
      href={props.href}
      disableElevation
      style={props.bgColor ? {...button, backgroundColor: props.bgColor } : {...button }}
      variant="contained"
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </MUIButton>
  )
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button