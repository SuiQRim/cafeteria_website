import { FC, useEffect, useState } from "react";
import Api from "../../api/Api";
import IFoodCatalog from "../../models/IFoodCatalog";
import FoodCatalog from "../../components/foodCatalog/FoodCatalog";
import IFood from "../../models/IFood";
import MiniButton from "../../ui/buttons/MiniButton";
import style from './FoodCatalogPage.module.css'
import EditCatalog from "../../components/foodCatalog/EditCatalog";


const FoodCatalogPage:FC = () => {

    const [foodCatalogs, setFoodCatalogs] = useState<IFoodCatalog[]>();
    
    const nonEditValue = -1;
    const addValue = 0;
    const [editableFoodId, setEditableFoodId] = useState<number>(nonEditValue)
    const [editableCatalogId, setEditableCatalogId] = useState<number>(nonEditValue)

    const getFoodCatalogs = () => {
        Api.get('api/FoodCatalogs/collection?withFood=true').then((response) => {
            setFoodCatalogs(response.data)
        })
    }

    useEffect(() => {
        getFoodCatalogs()
    },[])


    const saveFood = (food: IFood) => {
        setEditableFoodId(nonEditValue);
        Api.put(`api/Foods/edit/${food.id}`,
            {
                ...food
            }).then(() => getFoodCatalogs())
        
    }

    const deleteFood = (id : number) => {
        setEditableFoodId(nonEditValue);
        Api.delete(`api/Foods/${id}`).then(() => getFoodCatalogs())
    }


    const addFood = (food: IFood, catalogId : number) => {
        Api.post(`api/Foods/add`,
            {
                ...food,
                catalogId: catalogId
            }).then(() => getFoodCatalogs())
        
    }

    const saveCatalog = (catalog: IFoodCatalog) => {
        let id: number = catalog.id;
        setEditableCatalogId(nonEditValue);

        if(id === addValue) {
            Api.post(`api/FoodCatalogs/add`,
                {
                    name : catalog.name
                }).then(() => getFoodCatalogs())
            return;
        }

        Api.put(`api/FoodCatalogs/${id}`,
            {
                name : catalog.name
            }).then(() => getFoodCatalogs())
        
    }

    return (
        <div>
            <div className={style.catalogs}>
                {foodCatalogs && foodCatalogs.map((item) => 
                    <FoodCatalog key={item.id} catalog={item}
                        editCatalog={() => setEditableCatalogId(item.id)}
                        editFood={(id: number) => setEditableFoodId(id)} 
                        saveFood={saveFood} 
                        editableFoodId={editableFoodId} 
                        addFood={addFood}
                        deleteFood={deleteFood}
                        cancelFoodEdit={() => setEditableFoodId(nonEditValue)}/>
                )}

                <div className={style.add}>
                    <MiniButton symbol='+' onClick={() => setEditableCatalogId(addValue)}/>
                    <div className={style.text}>Добавить</div>
                </div>
                
            </div>

           
            {editableCatalogId === nonEditValue ||
            <EditCatalog save={saveCatalog} cancel={() => setEditableCatalogId(nonEditValue)} catalog={foodCatalogs && foodCatalogs.find(c => c.id === editableCatalogId)}/>}
            
        </div>
    );
}

export default FoodCatalogPage;
