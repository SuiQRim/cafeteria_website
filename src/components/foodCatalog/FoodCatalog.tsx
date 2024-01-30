import React, { FC } from 'react'
import IFoodCatalog from '../../models/IFoodCatalog'
import Food from '../food/Food'
import style from './FoodCatalog.module.css'

type Props = {
    catalog : IFoodCatalog
}

const FoodCatalog:FC<Props> = ({catalog}) => {
    return (
        <div className={style.catalog}>
            <div className={style.name}>
                <span>{catalog.name}</span>
            </div>
            <div className={style.foods}>
                {catalog.foods.map((item, index) => <Food key={index} food={item}></Food>)}
            </div>
        </div>
    )
}

export default FoodCatalog