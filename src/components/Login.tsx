import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div>
        <div>
            <span>Логин</span>
            <input type='text'/>
        </div>
        <div>
            <span>Пароль</span>
            <input type='password'/>
        </div>
    </div>
  )
}

export default Login