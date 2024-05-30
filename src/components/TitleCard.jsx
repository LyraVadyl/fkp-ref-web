// React
import React from 'react';

// Stylesheet
import '../css/TitleCard.css';

// Graphics
import MockupFKPApp from '../assets/images/Mockup_1.png';

export default function TitleCard() {
  return (
   <div id='card'>
     <div id='title1'>/BERUFS- UND AUSBILDUNGSAPP</div>
     <div id='produkt'>FKP Sachsen App</div>
     <img src={MockupFKPApp} alt='Mockup FKP Sachsen App' />
     <div id='cardInfo'>
       <InfoContainer infoName='Kunde:' infoInhalt='SACHSENJOB GmbH' />
       <InfoContainer infoName='Branche:' infoInhalt='Personaldienstleistung' />
       <InfoContainer infoName='Produkt:' infoInhalt='App' />
     </div>
   </div>
  );
 };

/* ----- Untercomponente ----- */
 function InfoContainer(props) {
  return (
    <div className='infoContainer'>
      <div className='infoName'>{props.infoName}</div>
      <div className='infoInhalt'>{props.infoInhalt}</div>
    </div>
  );
 };