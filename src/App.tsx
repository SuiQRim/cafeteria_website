import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/header/Header';
import IUser from './models/IUser';
import Api from './api/Api';
import FoodCatalogPage from './pages/foodCatalogPage/FoodCatalogPage';

function App() {

    const [isLogin, setIsLogin] = useState<boolean>();

    const acc : IUser = {
        login : 'Admin',
        password : 'Admin'
    }

    useEffect(() => {
        Api.post('api/Users/login', acc).then((response) => {
            setIsLogin(true);   
        })
    })


    return (
        <div className="App">
            <FoodCatalogPage/>
        </div>
    );
}

export default App;
