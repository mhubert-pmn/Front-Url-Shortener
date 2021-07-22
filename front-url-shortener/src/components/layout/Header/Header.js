import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import MenuIcon from '../../../medias/menu.png';

const token = localStorage.getItem("token");

const headerLinks = [
  {
    text: "Raccourcir une URL",
    link: "/raccourcir-une-url"
  },
  {
    text: "Mes URLs",
    link: "/mes-urls"
  }
]

const headerButtons = [
  {
    text: "Inscription",
    link: "/inscription"
  },
  {
    text: "Connexion",
    link: "/"
  },
  {
    text: "Déconnexion",
    link: "/deconnexion"
  }
]

export const Menu = () => {
  return(
    <div className="menu">
      <ul className="menu__links">
        {token !== null && headerLinks.map(link => (
          <li key={link.text}>
            <Link to={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
        
        {headerButtons.map(button => (
          token !== null ? (
            (button.text !== "Inscription" && button.text !== "Connexion") &&
            <button type="button" key={button.text}>
              <Link to={button.link}>{button.text}</Link>
            </button>
          ) : (
            button.text !== "Déconnexion" &&
            <button type="button" key={button.text}>
              <Link to={button.link}>{button.text}</Link>
            </button>
          )
        ))}
    </div>
  )
}

export const MobileMenu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const onIconClick = () => {
    setDisplayMenu(!displayMenu);
    console.log(displayMenu);
  }

  return (
    <div className="mobile-menu">
      <img src={MenuIcon} alt="menu icon" onClick={onIconClick} />

      <div className="mobile-menu__sub-menu" style={displayMenu === false ? {display: "none"} : {display: "block"}}>
        <ul className="mobile-menu__sub-menu__links">
          {token !== null && headerLinks.map(link => (
            <li key={link.text}>
              <Link to={link.link}>{link.text}</Link>
            </li>
          ))}
          
          {headerButtons.map(button => (
            token !== null ? (
              (button.text !== "Inscription" && button.text !== "Connexion") &&
              <li key={button.text}>
                <Link to={button.link}>{button.text}</Link>
              </li>
            ) : (
              button.text !== "Déconnexion" &&
              <li key={button.text}>
                <Link to={button.link}>{button.text}</Link>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  )
}

export const SubHeader = () => {
  return(
    <div className="header__sub-header">
      <div className="header__sub-header__triangle"></div>
    </div>
  )
}

export const Header = ({ ...props }) => {
  return(
    <div className="header" {...props}>
      <div className="header__content">
        <Link to="/" className="header__content__logo">URL Shortener</Link>
        <Menu />
        <MobileMenu />
      </div>

      <SubHeader />
    </div>
  )
}