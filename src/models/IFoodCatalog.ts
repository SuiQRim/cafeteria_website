import IFood from "./IFood";

export default interface IFoodCatalog {
    id : number,
    name : string,
    foods : IFood[]
}