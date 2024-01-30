import React, { FC, InputHTMLAttributes } from 'react'
import style from './Input.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className? : string
} 
const Input:FC<Props> = (props) => {
  return (
    <input {...props} className={style.input + " " + props.className}/>
  )
}

export default Input