// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/Kontakt.css';

// Graphics
import PfeilIconW from '../assets/images/pfeil-icon-w.svg';
import Profilbild from '../assets/images/profilbild.png';

export default function Kontakt() {
  const [submitClassName, setSubmitClassName] = React.useState('submit');

  return (
    <div id='contentContainer8'>
      <div id='kontaktInfos'>
        <h1>KONTAKT</h1>
        <div id='titel8'>/KONTAKTDATEN</div>
        <img id='pfp' src={Profilbild} alt='Bild Mitarbeiter'/>
        <div id='telNr'>+49 (0) 351 41886494 3</div>
        <div id='E-Mail'>A.SCHOBER@DIGITAL-DEFAULT.COM</div>
        <div id='titel9'>/WIR SIND FÜR SIE DA</div>
        <div id='kontaktOptionen'>
          <div id='kontaktIcons'>
            <img src={PfeilIconW} alt='Weißer Pfeil Icon' />
            <img src={PfeilIconW} alt='Weißer Pfeil Icon' />
            <img src={PfeilIconW} alt='Weißer Pfeil Icon' />
          </div>
          <div id='kontaktOptText'>
            <div>MEHR ALS 14 JAHRE ERFAHRUNG</div>
            <div>INDIVDUELLE INNOVATIVE PROJEKTLÖSUNGEN</div>
            <div>UNVERBINDLICHE UND KOSTENLOSE ERSTBERATUNG</div>
          </div>
        </div>
      </div>
      <form id='form'>
        <div>NAME</div>
        <input type='text' name='name' placeholder='Max Mustermann'/>
        <div>WORUM GEHT ES?</div>
        <select id='subjects'>
          <option value='Design einer neuen Website'>Design einer neuen Website</option>
          <option value='Entwicklung einer mobilen App'>Entwicklung einer mobilen App</option>
          <option value='Portierung einer bestheneden Website'>Portierung einer bestheneden Website</option>
          <option value='Erstellung eines Online-Tools'>Erstellung eines Online-Tools</option>
          <option value='Entwicklung einer Markenidentität'>Entwicklung einer Markenidentität</option>
          <option value='Optimierung eines vorhandenen Onlineshops'>Optimierung eines vorhandenen Onlineshops</option>
        </select>
        <div id='anliegen'>
          <div>BESCHREIBEN SIE UNS IHR ANLIEGEN.</div>
          <textarea type='text' placeholder='Ihre Nachricht'/>
        </div>
        <label id='AGB'>
          <input type='checkbox' />
          <div>Hiermit  bestätige ich, die AGB's gelesen zu haben.</div>
        </label>
        <button
          type='button'
          className={submitClassName}
          onClick={
            () => setSubmitClassName('submitted')
          }
        >Senden</button>
      </form>
    </div>
  );
};