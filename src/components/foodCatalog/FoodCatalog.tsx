import React, { FC, useState } from 'react'
import IFoodCatalog from '../../models/IFoodCatalog'
import Food from '../food/Food'
import style from './FoodCatalog.module.css'
import MiniButton from '../../ui/buttons/MiniButton'
import EditFood from '../food/EditFood'
import IFood from '../../models/IFood'
import Input from '../../ui/inputs/Input'

type Props = {
    catalog : IFoodCatalog,
    editableFoodId : number,
    isEdit?: boolean,
    editFood: (id: number) => void
    saveFood: (food: IFood) => void
    saveCatalog: (catalog: IFoodCatalog) => void
    editCatalog: () => void
}

const FoodCatalog:FC<Props> = ({catalog, editableFoodId, saveFood, editFood, isEdit, saveCatalog, editCatalog}) => {

    const [editableCatalog, setEditableCatalog] = useState<IFoodCatalog>(catalog);
    const editName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditableCatalog(prevState => {
            return {
                ...prevState,
                name : e.target.value
            }
        })
    }

    return (
        <div className={style.catalog}>
            <div>
            
                <div className={style.nameWrapper}>
                {isEdit ? 
                    <Input className={style.input}
                        onChange={editName}
                        value={editableCatalog.name}/>:
                    <div className={style.name}>
                        {catalog.name}
                    </div>
                }
                {isEdit ?
                    <div className={style.edit}>
                        <MiniButton symbol='s' onClick={() => saveCatalog(editableCatalog)}/>
                    </div> :
                    <div className={style.edit}>
                        <MiniButton symbol='✎' onClick={editCatalog}/>
                    </div> 
                }
                </div>
                
                
            </div>
            <div className={style.foodsWrapper}>

           
                <div className={style.foods}>
                    {catalog.foods.map((item) => item.id === editableFoodId ? 
                        <EditFood save={saveFood} key={item.id} food={item}/> : 
                        <Food edit={() => editFood(item.id)} key={item.id} food={item}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FoodCatalog