import { FC, useEffect, useState } from "react";
import Api from "../../api/Api";
import IFoodCatalog from "../../models/IFoodCatalog";
import FoodCatalog from "../../components/foodCatalog/FoodCatalog";
import IFood from "../../models/IFood";


const FoodCatalogPage:FC = () => {

    const [foodCatalogs, setFoodCatalogs] = useState<IFoodCatalog[]>();
    
    const nonEditValue = 0;
    const [editableFoodId, setEditableFoodId] = useState<number>(nonEditValue)

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

    const saveFood = (food: IFood) => {
        setEditableFoodId(nonEditValue);
        Api.put(`http://localhost:5145/api/Foods/edit/${food.id}`,
            {
                name : food.name,
                kcal : food.kcal,
                price : food.price,
                catalogId: food.catalogId
            }).then(() => getFoodCatalogs())
        
    }

    return (
        <div style={{display : 'flex', flexDirection : 'column', gap:'20px'}}>
            {foodCatalogs && foodCatalogs.map((item) => 
                <FoodCatalog editFood={editFood} saveFood={saveFood} editableFoodId={editableFoodId} key={item.id} catalog={item}/>)}
        </div>
    );
}

export default FoodCatalogPage;
