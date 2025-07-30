import React from "react";
import './Header.css'
interface Props{
    ClassName?: string
}

export const Header: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>
            <nav className="Header-navigation">
                <div className="Header-nav-item"><a href="/">войти</a></div>
                <div className="Header-nav-item"><a href="">профиль</a></div>
                <div className="Header-nav-item"><a href="">статистика</a></div>
                <div className="Header-nav-item"><a href="">главная</a></div>
            </nav>
        </div>);
};