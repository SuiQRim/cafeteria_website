import React, { FC } from 'react'
import IFood from '../../models/IFood'
import style from './Food.module.css'
import MiniButton from '../../ui/buttons/MiniButton'

interface Props  {
    food : IFood,
    edit : () => void
}

const Food:FC<Props> = ({food, edit}) => {

    const editFood = () => {
        edit();
    }

    return (
        <div className={style.food}>
            <div className={style.nameWrapper}>
                <div className={style.name}>{food.name}</div>
                <div className={style.editMenuWrapper}>
                    <MiniButton className={style.button} symbol='✎' onClick={editFood}/>
                </div>  
            </div>
            <div className={style.content}>
                <div className={style.detailsWrapper}>
                    <div>Ккал (100 гр): <label className={style.kcal}>{food.kcal}</label></div>
                </div>
                <div className={style.priceWrapper}>
                    <div className={style.price}>{food.price}₽</div>
                </div>
            </div>
        </div>
    )
}

export default Food