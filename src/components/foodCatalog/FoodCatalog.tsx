import React, { FC } from 'react'
import IFoodCatalog from '../../models/IFoodCatalog'
import Food from '../food/Food'
import style from './FoodCatalog.module.css'
import EditButton from '../../ui/buttons/MiniButton'

type Props = {
    catalog : IFoodCatalog
}

const FoodCatalog:FC<Props> = ({catalog}) => {
    return (
        <div className={style.catalog}>
            <div className={style.nameWrapper}>
                <div className={style.name}>{catalog.name}</div>
                <div className={style.edit}>
                    <EditButton symbol='✎'/>
                </div>
            </div>
            <div className={style.foods}>
                {catalog.foods.map((item) => <Food key={item.id} food={item}/>)}
            </div>
        </div>
    )
}

export default FoodCatalog