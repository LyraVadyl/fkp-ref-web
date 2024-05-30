// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/Ergebnisse.css';

// Graphics
import StiftIcon from '../assets/images/stift-icon.svg';
import BildschirmIcon2 from '../assets/images/bildschirm-icon-2.svg';
import MegafonIcon from '../assets/images/megafon-icon.svg';
import RaketeIcon from '../assets/images/rakete-icon.svg';
import LineGradient from '../assets/images/line-gradient.svg';
import LineSolid from '../assets/images/line-solid.svg';
import LineDotted from '../assets/images/line-dotted.svg';

export default function Ergebnisse() {
  return (
    <div id='contentContainer5'>
      <div id='ergebnisseTitel'>
        <h1 id='titel5'>/RESULTAT</h1>
        <h2>Das Ergebnis unserer Arbeit<br/>an diesem Projekt</h2>
      </div>
      <div id='ergebnisse'>
        <div id='ergebnisseGrafik'>
          <img src={LineGradient} alt='Linie mit Verlauf' />
          <img className='iconTyp1'src={StiftIcon} alt='Stift Icon' />
          <img src={LineSolid} alt='Linie' />
          <img className='iconTyp1' src={BildschirmIcon2} alt='Bildschirm Icon' />
          <img src={LineSolid} alt='Linie' />
          <img className='iconTyp1' src={MegafonIcon} alt='Megafon Icon' />
          <img src={LineDotted} alt='Gepunktete Linie' />
          <img className='iconTyp2' src={RaketeIcon} alt='Rakete Icon' />
        </div>
        <div id='ergebnisseText'>
          <h2>DESIGN</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Amet elit viverra nulla volutpat porta fames congue in a. Vel velit est tincidunt augue quam erat mattis.</p>
          <h2>ENTWICKLUNG</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Amet elit viverra nulla volutpat porta fames congue in a. Vel velit est tincidunt augue quam erat mattis.</p>
          <h2>MARKETING</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Amet elit viverra nulla volutpat porta fames congue in a. Vel velit est tincidunt augue quam erat mattis.</p>
          <div>...AND STILL RUNNING</div>
        </div>
      </div>
    </div>
  );
};