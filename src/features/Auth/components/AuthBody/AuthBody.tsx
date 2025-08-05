import React, {useState} from "react";
import './AuthBody.css'
import {useDispatch} from "react-redux";
import {addUser} from "../../store/UserSlice.ts";

export const AuthBody: React.FC = () => {
    const dispacth = useDispatch()
    const [login,setLogin] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    function AuthFunction(){
        dispacth(addUser({login: login,password: password}))
        localStorage.setItem('User',JSON.stringify({login: login,password: password}))
    }
    return (
        <div className={'Auth'}>
            <div className={'AuthBody'}>
                <div className="AuthBody-header">Войти</div>
                <div className="AuthBody-section">
                    <div className="AuthBody-tittle">Логин</div>
                    <input onChange={(ev)=> setLogin(ev.target.value)} type="text"/>
                </div>
                <div className="AuthBody-section">
                    <div className="AuthBody-tittle">Пароль</div>
                    <input onChange={(ev)=> setPassword(ev.target.value)} type="text"/>
                </div>
                <div className="AuthBody-section buttons">
                    <button onClick={()=> AuthFunction()}>Войти</button>
                    <button>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
};