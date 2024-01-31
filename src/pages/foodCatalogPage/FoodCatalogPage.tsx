import { FC, useEffect, useState } from "react";
import Api from "../../api/Api";
import IFoodCatalog from "../../models/IFoodCatalog";
import FoodCatalog from "../../components/foodCatalog/FoodCatalog";
import IFood from "../../models/IFood";


const FoodCatalogPage:FC = () => {

    const [foodCatalogs, setFoodCatalogs] = useState<IFoodCatalog[]>();
    
    const nonEditValue = 0;
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

    const editFood = (id: number) => {
        setEditableFoodId(id)
    }

    const editCatalog = (id: number) => {
        setEditableCatalogId(id)
    }

    const saveFood = (food: IFood) => {
        setEditableFoodId(nonEditValue);
        Api.put(`api/Foods/edit/${food.id}`,
            {
                ...food
            }).then(() => getFoodCatalogs())
        
    }

    const addFood = (food: IFood, catalogId : number) => {
        Api.post(`api/Foods/add`,
            {
                ...food,
                catalogId: catalogId
            }).then(() => getFoodCatalogs())
        
    }

    const saveCatalog = (catalog: IFoodCatalog) => {
        setEditableCatalogId(nonEditValue);
        Api.put(`api/FoodCatalogs/${catalog.id}`,
            {
                name : catalog.name
            }).then(() => getFoodCatalogs())
        
    }

    return (
        <div>
            <div style={{display : 'flex', flexDirection : 'column', gap:'20px', width: '720px'}}>
                {foodCatalogs && foodCatalogs.map((item) => 
                    <FoodCatalog key={item.id} catalog={item}
                        editCatalog={() => editCatalog(item.id)} saveCatalog={saveCatalog} 
                        editFood={editFood} saveFood={saveFood} 
                        editableFoodId={editableFoodId} isEdit={editableCatalogId === item.id}
                        addFood={addFood}/>
                    )}

            </div>
        </div>
    );
}

export default FoodCatalogPage;
