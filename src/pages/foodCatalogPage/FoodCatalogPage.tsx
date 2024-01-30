import { FC, useEffect, useState } from "react";
import Api from "../../api/Api";
import IFoodCatalog from "../../models/IFoodCatalog";
import FoodCatalog from "../../components/foodCatalog/FoodCatalog";


const FoodCatalogPage:FC = () => {

    const [foodCatalogs, setFoodCatalogs] = useState<IFoodCatalog[]>([]);

    useEffect(() => {
        Api.get('api/FoodCatalogs/collection?withFood=true').then((response) => {
            setFoodCatalogs(response.data)
        })
    },[])
    return (
        <div style={{display : 'flex', flexDirection : 'column', gap:'20px'}}>
            {foodCatalogs && foodCatalogs.map((item, index) => 
            <div>
                <FoodCatalog  key={index} catalog={item}/>
                </div>)}
        </div>
    );
}

export default FoodCatalogPage;
