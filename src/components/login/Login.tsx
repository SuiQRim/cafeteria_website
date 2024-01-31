import React, { FC, useState } from 'react'
import style from './Login.module.css'
import IUser from '../../models/IUser'

interface Props {
    onLogin : (user: IUser) => void,
    error? : string,
}

const Login:FC<Props> = ({onLogin, error}) => {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
    <div className={style.wrapper}>
        <div className={style.block}>
            <div className={style.logo}>Cafeteria</div>
            <div className={style.inputWrapper}>
                <input className='input' type='text' placeholder='Логин' value={login} onChange={(event) => setLogin(event.target.value)}/>
                <input className='input' type='password' placeholder='Пароль' value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className={style.action}>
                <div className={style.errorWrapper}>
                    {error && <div className='error'>{error}</div>}
                </div>
                <button onClick={() => onLogin({login : login, password : password})}>Войти</button>
            </div>
        </div>
    </div>
  )
}

export default Login