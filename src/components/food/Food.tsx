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
                    <MiniButton symbol='✎' onClick={editFood}/>
                </div>  
            </div>
            <div className={style.content}>
                <div className={style.detailsWrapper}>
                    <div>Ккал (100 гр): {food.kcal}</div>
                </div>
                <div className={style.price}>
                    <div>{food.price}₽</div>
                </div>
            </div>
        </div>
    )
}

export default Food