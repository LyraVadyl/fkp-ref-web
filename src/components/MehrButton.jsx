// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/MehrButton.css';

// Graphics
import PfeilIconW from '../assets/images/pfeil-icon-w.svg';

export default function MehrButton() {
  return (
    <div id='buttonMehr'>
      <p>Mehr</p>
      <img src={PfeilIconW} alt='Weißer Pfeil Icon' />
    </div>
  );
};