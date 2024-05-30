// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/Leistungen.css';

// Graphics
import BildschirmIconS from '../assets/images/bildschirm-icon-s.svg';
import LeistungenPfeilS from '../assets/images/leistungen-pfeil-s.svg';

// Components
import MehrButton from './MehrButton';

export default function Leistungen() {
  return(
    <div id='contentContainer3'>
      <p className='titel3'>/LEISTUNGEN</p>
      <h1>Unsere Leistungen für die FKP Sachsen App</h1>
      <div id='leistungenListe'>
        <div className='leistungenCol'>
          <LeistungenContainer leistungTitel='Digitalstrategie-Beratung' leistungText='
          Die Digitalstrategie-Beratung war ein entscheidender Schritt für die Entwickl...
          '/>
          <LeistungenContainer leistungTitel='Digitalstrategie-Beratung' leistungText='
          Die Digitalstrategie-Beratung war ein entscheidender Schritt für die Entwickl...
          '/>
        </div>
        <div className='leistungenCol'>  
        <LeistungenContainer leistungTitel='Digitalstrategie-Beratung' leistungText='
          Die Digitalstrategie-Beratung war ein entscheidender Schritt für die Entwickl...
          '/>
          <LeistungenContainer leistungTitel='Digitalstrategie-Beratung' leistungText='
          Die Digitalstrategie-Beratung war ein entscheidender Schritt für die Entwickl...
          '/>
        </div>
        <div className='leistungenCol'>
        <LeistungenContainer leistungTitel='Digitalstrategie-Beratung' leistungText='
          Die Digitalstrategie-Beratung war ein entscheidender Schritt für die Entwickl...
          '/>
          <LeistungenContainer leistungTitel='Digitalstrategie-Beratung' leistungText='
          Die Digitalstrategie-Beratung war ein entscheidender Schritt für die Entwickl...
          '/>
        </div>
      </div>
      <MehrButton />
    </div>
  );
};

/* ----- Unterkomponenten ----- */
function LeistungenContainer(props) {
  const [className, setClassName] = React.useState('leistung');

  return (
    <div
      className={className}
      onMouseEnter={() => setClassName('leistungHover')}
      onMouseLeave={() => setClassName('leistung')}
    >
      <div className='bildschirmIconRahmen'>
        <img className='bildschirmIcon' src={BildschirmIconS} alt='Bildschirm Icon' />
      </div>
      <h2>{props.leistungTitel}</h2>
      <p>{props.leistungText}</p>
      <div className='pfeilIconRahmen'>
        <img className='pfeilIcon' src={LeistungenPfeilS} alt='Pfeil Icon' />
      </div>
    </div>
  );
};