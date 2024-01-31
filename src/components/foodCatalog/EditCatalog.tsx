import React, { FC, useState } from 'react'
import IFoodCatalog from '../../models/IFoodCatalog'
import style from './EditCatalog.module.css'

interface Props {
    catalog? :IFoodCatalog,
    save: (catalog:IFoodCatalog) => void,
    deleteCatalog: (id: number) => void,
    cancel: () => void
}

const EditCatalog:FC<Props> = ({catalog, cancel, save, deleteCatalog}) => {
    if(catalog == null)
    {
        catalog = {
            id: 0,
            name : '',
            foods : []
        }
    }

    const [editableCatalog, setEditableCatalog] = useState<IFoodCatalog>(catalog);

    const addOrUpdate = () => {
        save(editableCatalog)
    }

    const editName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditableCatalog(prevState => {
            return {
                ...prevState,
                name : e.target.value
            }
        })
    }


    return (
        <div className={style.wrapper}>
            <div className={style.block}>
                <div>
                    <div className={style.cancel}>
                        <button onClick={cancel}>X</button>
                    </div>
                </div>
                <div className={style.catalog}>
                    <div>
                        <input className={style.input} placeholder='Название'
                            value={editableCatalog.name} onChange={editName}/>
                    </div>
                    <div className={style.menu}>
                        {editableCatalog.id !== 0 && <button className={style.delete} onClick={() => deleteCatalog(editableCatalog.id)}>Delete</button>}
                        <button className={style.save} onClick={addOrUpdate}>Сохранить</button>                 
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default EditCatalog