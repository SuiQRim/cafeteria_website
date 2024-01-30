import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/header/Header';
import IUser from './models/IUser';
import Api from './api/Api';

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

    const getUsers = () => {
        Api.get('api/Users/collection?start=0&batchSize=1').then((response) => { 
            console.log(response.data)
        })
    }

    return (
        <div className="App">
            {isLogin && <Header/>}
            <Login/>
            <button onClick={getUsers}>Юзеры</button>
        </div>
    );
}

export default App;
