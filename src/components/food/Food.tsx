import React, { FC } from 'react'
import IFood from '../../models/IFood'
import style from './Food.module.css'

type Props = {
    food : IFood
}

const Food:FC<Props> = ({food}) => {
    console.log(food)
  return (
    <div className={style.food}>
        <div className={style.name}>
            <span>{food.name}</span>
        </div>
        <div className={style.details}>
            <span>kcal (100g): {food.kcal}</span>
            <span>price: {food.price}</span>
        </div>
    </div>
  )
}

export default Food