// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/Zahlen.css';

export default function Zahlen() {
  return (
    <dvi id='contentContainer4'>
      <h2 id='titel4'>LOREM IPSUM DOLOR SIT AMET CONSECTETUR VELIT</h2>
      <div id='zahlenCols'>
        <NutzerZahlen anzahl='236' nutzerBezeichnung='ARBEITGEBER IN DER APP'/>
        <NutzerZahlen anzahl='25' nutzerBezeichnung='LOREM IPSUM DOLOR SIT AMET'/>
        <NutzerZahlen anzahl='96' nutzerBezeichnung='LOREM IPSUM DOLOR SIT AMET'/>
      </div>
    </dvi>
  );
};

/* ----- Unterkomponente ----- */
function NutzerZahlen(props) {
  return (
    <div>
      <h3>{props.anzahl}</h3>
      <p>{props.nutzerBezeichnung}</p>
    </div>
  );
};