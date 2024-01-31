import React, { ButtonHTMLAttributes, FC } from 'react'
import style from './MiniButton.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    symbol : string,
    className? : string
}

const MiniButton:FC<Props> = (props) => {
    return (
        <button {...props} className={style.button + " " + props.className}>{props.symbol}</button> 
    )
  }
  
  export default MiniButton;

