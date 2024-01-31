import React, { FC, useState } from 'react'
import IFoodCatalog from '../../models/IFoodCatalog'
import Food from '../food/Food'
import style from './FoodCatalog.module.css'
import MiniButton from '../../ui/buttons/MiniButton'
import EditFood from '../food/EditFood'
import IFood from '../../models/IFood'

interface Props {
    catalog : IFoodCatalog,
    editableFoodId : number,
    editFood: (id: number) => void
    deleteFood: (id: number) => void
    saveFood: (food: IFood) => void
    editCatalog: () => void,
    addFood: (food :IFood, catalogId: number) => void,
    cancelFoodEdit: () => void,
}

const FoodCatalog:FC<Props> = ({catalog, editableFoodId, saveFood, editFood, editCatalog, addFood, deleteFood, cancelFoodEdit}) => {
    
    const [isFoodAdd, setIsFoodAdd] = useState<boolean>();
    const [editableCatalog, setEditableCatalog] = useState<IFoodCatalog>(catalog);

    const editName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditableCatalog(prevState => {
            return {
                ...prevState,
                name : e.target.value
            }
        })
    }

    const createFood = (food: IFood) => {
       addFood(food, catalog.id)
       setIsFoodAdd(false);
    }

    return (
        <div>
            <div>

            <div className={style.editNameWrapper}>
                <div className={style.edit}>
                    <MiniButton symbol='✎' onClick={editCatalog}/>
                </div> 
                <div className={style.name}>
                    {catalog.name}
                </div>
            </div>
            
            
            </div>
            <div className={style.foodsWrapper}>
                <div className={style.foods}>
                    {catalog.foods.map((item) => item.id === editableFoodId ? 
                        <div className={style.foodWrapper}>
                            <EditFood save={saveFood} key={item.id} food={item}/>
                            <div className={style.foodMenu}>
                                <MiniButton symbol='D' onClick={() => deleteFood(item.id)}/>
                                <MiniButton symbol='C' onClick={cancelFoodEdit}/>
                            </div>
                        </div> : 
                        <div className={style.foodWrapper}>
                            <Food edit={() => editFood(item.id)} key={item.id} food={item}/>
                        </div>
                        )
                    }
                    
                    {isFoodAdd ?
                        <div className={style.foodWrapper}>
                            <div>
                                <EditFood save={createFood}/>
                            </div>
                            <div className={style.foodMenu}>
                                <MiniButton symbol='C' onClick={() => setIsFoodAdd(false)}/>
                            </div>
                        </div>
                        :
                        <div className={style.foodWrapper}>
                            <div className={style.addFood}>
                                <div className={style.text}>Добавить</div>
                                <MiniButton symbol='+' onClick={() => setIsFoodAdd(true)}/>
                            </div>
                        </div>
                    }

                  
                </div>
            </div>
        </div>
    )
}

export default FoodCatalog