import React, { FC } from 'react'
import IFoodCatalog from '../../models/IFoodCatalog'
import Food from '../food/Food'
import style from './FoodCatalog.module.css'
import MiniButton from '../../ui/buttons/MiniButton'
import EditFood from '../food/EditFood'
import IFood from '../../models/IFood'

type Props = {
    catalog : IFoodCatalog,
    editableFoodId : number,
    editFood: (id: number) => void
    saveFood: (food: IFood) => void
}

const FoodCatalog:FC<Props> = ({catalog, editableFoodId, saveFood, editFood}) => {

    return (
        <div className={style.catalog}>
            <div className={style.nameWrapper}>
                <div className={style.name}>{catalog.name}</div>
                <div className={style.edit}>
                    <MiniButton symbol='✎'/>
                </div>
            </div>
            <div className={style.foods}>
                {catalog.foods.map((item) => item.id === editableFoodId ? 
                    <EditFood save={saveFood} key={item.id} food={item}/> : 
                    <Food edit={() => editFood(item.id)} key={item.id} food={item}/>
                    )
                }
            </div>
        </div>
    )
}

export default FoodCatalog