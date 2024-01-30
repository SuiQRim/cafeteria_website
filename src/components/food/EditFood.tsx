import React, { FC, useState } from 'react'
import IFood from '../../models/IFood'
import style from './Food.module.css'
import MiniButton from '../../ui/buttons/MiniButton'

type Props = {
    food : IFood,
    save: (food :IFood) => void
}

const EditFood:FC<Props> = ({food, save}) => {

    const [editableFood, setEditableFood] = useState<IFood>(food);

    const editName = (e:React.ChangeEvent<HTMLInputElement>) => {

        setEditableFood(prevState => {
            return {
                ...prevState,
                name : e.target.value
            }
        })
    }

    const editPrice = (e:React.ChangeEvent<HTMLInputElement>) => {

        setEditableFood(prevState => {
            return {
                ...prevState,
                price : +e.target.value
            }
        })
    }

    const editkcal = (e:React.ChangeEvent<HTMLInputElement>) => {

        setEditableFood(prevState => {
            return {
                ...prevState,
                kcal : +e.target.value
            }
        })
    }

    return (
        <div className={style.food}>
            <div className={style.nameWrapper}>
            

                <div className={style.name}>
                    <input 
                        value={editableFood.name} 
                        onChange={editName}/>
                </div>

                <div className={style.editMenuWrapper}>
                    <MiniButton symbol='s' onClick={() => save(editableFood)}/>
                </div>
                

            </div>
            <div className={style.content}>
                <div className={style.detailsWrapper}>

                    <div>
                        <input 
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }}
                            value={editableFood.kcal === 0 ? '' : editableFood.kcal} 
                            onChange={editkcal}/>
                    </div>
                
                </div>

                 <div className={style.price}>

                    <div>
                        <input 
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                                }
                            }}
                            value={editableFood.price === 0 ? '' : editableFood.price} 
                            onChange={editPrice}/>
                    </div>
                
                </div>
            

            </div>
        </div>
    )
}

export default EditFood