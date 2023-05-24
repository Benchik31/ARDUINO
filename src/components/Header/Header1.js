import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import account from '../../images/account.svg'
import open from '../../images/open.png'
function Header(props) {
  //console.log(props)
  const openAside = () =>{
    props.asideClick()
  }
  return (
    <header className="header header1">
      <Link to="/" className="header__logo header0__logo"><img alt="логотип" src={logo}></img></Link>
      <h1 className="header__title">Твоё местоположение на карте</h1>
      <div className="header__buttons">
        <Link to="/profile" onClick={props.accClick} className="header__reg-button">Аккаунт</Link>
        <div className="acount__img" alt="аккаунт"><img alt="иконка аккаунта" src={account}></img></div>
      </div>
      <button className={`header__open ${props.isopen}`} onClick={openAside}><img alt="открыть меню" src={open}></img></button>
    </header>);
}

export default Header;