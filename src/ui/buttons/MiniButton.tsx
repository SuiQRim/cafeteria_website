import React, { ButtonHTMLAttributes, FC } from 'react'
import style from './MiniButton.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    symbol : string
}

const MiniButton:FC<Props> = (props) => {
    return (
      <button className={style.button} {...props}>{props.symbol}</button>
    )
  }
  
  export default MiniButton;

