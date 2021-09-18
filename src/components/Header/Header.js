import React, {useState} from 'react';
import './header.css'

export default function Header() {
        return (
        <header>
            <div className="logo">
                <a href="#">
                    <img src="../Header/img/logo.png" width="80px" height="80px" alt="logo"/>
                    </a>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#top-page">Главная</a></li>
                    <li><a href="#Услуги">Услуги</a></li>
                    <li><a href="#Клиники и кабинеты">Клиники и кабинеты</a></li>
                    <li><a href="#О нас">О нас</a></li>
                    <li><a href="#Статьи">Статьи</a></li>
                    <li><a href="#FAQ">FAQ</a></li>
                    <li><a href="#Контакты">Контакты</a></li>
                </ul>
            </div>
            <button>ABOUT</button>
            <button>MY BOOKING</button>
            <button>SIGN IN</button>
        </header>
);
}
const App = function () {
    const [isLoggin, setIsLoggin] = useState(false);

    const onClick = () => {
      setIsLoggin(true)
    };
    return <>
        <Header isLoggin={isLoggin} />
        <button onClick={onClick}>SIGN IN</button>
    </>
}

