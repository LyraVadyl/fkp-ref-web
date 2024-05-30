// React
import React from 'react';

// Stylesheet
import '../css/NavMenu.css';

// Graphics
import DDLogo from '../assets/images/Logo.svg';
import BurgerMenu from '../assets/images/burger-menu.svg';

export default function NavMenu() {
  return (
    <div id='navBar'>
      <img src={DDLogo} alt='Default Digital Logo' />
      <div id='navOptions'>
        <div>Leistungen</div>
        <div>Referenzen</div>
        <div>Insights</div>
        <div>Über uns</div>
        <div>Karriere</div>
        <div>Kontakt</div>
        <div id='langSwitch'>DE | EN</div>
      </div>
      <img id='burgerMenu' src={BurgerMenu} alt='Burger Menü' />
    </div>
  );
};