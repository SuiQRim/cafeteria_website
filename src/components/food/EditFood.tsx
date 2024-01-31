import React, { FC, useState } from 'react'
import IFood from '../../models/IFood'
import style from './Food.module.css'
import MiniButton from '../../ui/buttons/MiniButton'
import Input from '../../ui/inputs/Input'

type Props = {
    food? : IFood,
    save: (food :IFood) => void
}

const EditFood:FC<Props> = ({food, save}) => {

    
    const [editableFood, setEditableFood] = useState<IFood>(food ?? {name : '', price : 0, id : 0, kcal : 0, catalogId : 0});

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

    const readNumbersOnly = (event :React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }
    return (
        <div className={style.editFood}>
            <div className={style.nameWrapper}>
        
                <div className={style.name}>
                    <Input
                        placeholder='Название блюда'
                        className={style.input}
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
                        <div className={style.detailLabel}>Ккал (100 гр)</div>
                        <Input className={style.input}
                            onKeyPress={readNumbersOnly}
                            value={editableFood.kcal === 0 ? '' : editableFood.kcal} 
                            onChange={editkcal}/>
                    </div>          
                </div>

                <div className={style.priceWrapper}> 
                    <div className={style.detailLabel}>Цена</div>
                    <Input className={style.input}
                        onKeyPress={readNumbersOnly}
                        value={editableFood.price === 0 ? '' : editableFood.price} 
                        onChange={editPrice}/>                
                </div>
            </div>
        </div>
    )
}

export default EditFood