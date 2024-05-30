// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/FAQ.css';

// Graphics
import Banner from '../assets/images/sachsenjob-banner.png';
import GebaeudeIcon from '../assets/images/gebaeude-icon.svg';

export default function FAQ() {
  return (
    <div id='contentContainer6'>
      <img src={Banner} alt='SACHSENJOB' />
      <div id='contentContainer7'>
        <div id='titel6'>/FAQ</div>
        <h1>SACHSENJOB GmbH</h1>
        <img src={GebaeudeIcon} alt='Firma Icon' />
        <p>Die SACHSENJOB GmbH ist eine renommierte Personalplattform für die Metall- 
          und Elektroindustrie in Sachsen, die sich auf betriebliche Personalarbeit 
          spezialisiert hat. Ihre Leistungen umfassen das Matching von Bewerbern und 
          offenen Stellen, M+E-Jobportale, Recruiting, Employer Branding sowie die 
          Übernahme und Überlassung von Personal. Zusätzlich bietet das Unternehmen 
          den Kurzcheck Personal/HR mit Arbeitgeberbenchmark und Schulungen im Bereich 
          Personalrecht und Betriebsrat.</p>
        <div id='titel7'>LOREM IPSUM DOLOR SIT AMET.</div>
      </div>
    </div>
  );
};