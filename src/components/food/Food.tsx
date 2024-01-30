import React, { FC } from 'react'
import IFood from '../../models/IFood'
import style from './Food.module.css'
import EditButton from '../../ui/buttons/MiniButton'

type Props = {
    food : IFood
}

const Food:FC<Props> = ({food}) => {
    return (
        <div className={style.food}>
            <div className={style.nameWrapper}>
                <div className={style.name}>{food.name}</div>
                <div className={style.editMenuWrapper}>
                    <EditButton symbol='↔'/>
                    <EditButton symbol='✎'/>
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