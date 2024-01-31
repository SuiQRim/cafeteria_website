import { useState } from 'react';
import './App.css';
import IUser from './models/IUser';
import Api from './api/Api';
import FoodCatalogPage from './pages/foodCatalogPage/FoodCatalogPage';
import Login from './components/login/Login';

function App() {

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const login = (user: IUser) => {

        Api.post('api/Users/login', user).then(() => {
            setIsLogin(true);   
        })
        .catch((error) => {
            if(error.response && error.response.status === 404)
                setError(error.response.data);
            
        })
    }

    return (
        <div className="App">
            {isLogin ?
            <div className='AppWrapper'>
                <FoodCatalogPage/>
            </div>
            :
            <Login onLogin={login} error={error}/>
            }
        </div>
    );
}

export default App;
