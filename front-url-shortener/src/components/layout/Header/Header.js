import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

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
        
        {headerButtons.map(button => (
          token !== null ? (
            (button.text !== "Inscription" && button.text !== "Connexion") &&
            <button type="button">
              <Link to={button.link}>{button.text}</Link>
            </button>
          ) : (
            button.text !== "Déconnexion" &&
            <button type="button">
              <Link to={button.link}>{button.text}</Link>
            </button>
          )
        ))}
      </ul>
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
        <p className="header__content__logo">URL Shortener</p>
        <Menu />
      </div>

      <SubHeader />
    </div>
  )
}