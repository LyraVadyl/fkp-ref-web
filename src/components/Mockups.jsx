// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/Mockups.css';

// Graphics
import Screens from '../assets/images/Screens.png'

export default function Mockups() {
  return (
  <div>
    <MockupScreenL mockupTitel='/LOREM IPSUM' mockupHeading='Jobs und Lehrstellen finden' mockupText='
    Die App erleichtert die Jobsuche durch eine Vielzahl von Funktionen. Nutzer können Anbieter in einer 
    Karten- oder Listenansicht anzeigen lassen und die integrierte Suchfunktion verwenden. Filter ermöglichen 
    es, die Suche zu verfeinern, und vergangene Suchanfragen können gespeichert werden. Bei spezifischen 
    Suchanfragen schlägt die App ähnliche Angebote vor. Die Standortfestlegung ermöglicht eine gezielte Suche 
    in bestimmten Regionen. Basierend auf dem erstellten Nutzerprofil zeigt die App relevante Firmen an. Zudem 
    besteht die Möglichkeit, interessante Stellenangebote zu speichern.
    ' />
    <MockupScreenR mockupTitel='/LOREM IPSUM' mockupHeading='Jobs und Lehrstellen finden' mockupText='
    Die App erleichtert die Jobsuche durch eine Vielzahl von Funktionen. Nutzer können Anbieter in einer 
    Karten- oder Listenansicht anzeigen lassen und die integrierte Suchfunktion verwenden. Filter ermöglichen 
    es, die Suche zu verfeinern, und vergangene Suchanfragen können gespeichert werden. Bei spezifischen 
    Suchanfragen schlägt die App ähnliche Angebote vor. Die Standortfestlegung ermöglicht eine gezielte Suche 
    in bestimmten Regionen. Basierend auf dem erstellten Nutzerprofil zeigt die App relevante Firmen an. Zudem 
    besteht die Möglichkeit, interessante Stellenangebote zu speichern.
    ' />
    <MockupScreenL mockupTitel='/LOREM IPSUM' mockupHeading='Jobs und Lehrstellen finden' mockupText='
    Die App erleichtert die Jobsuche durch eine Vielzahl von Funktionen. Nutzer können Anbieter in einer 
    Karten- oder Listenansicht anzeigen lassen und die integrierte Suchfunktion verwenden. Filter ermöglichen 
    es, die Suche zu verfeinern, und vergangene Suchanfragen können gespeichert werden. Bei spezifischen 
    Suchanfragen schlägt die App ähnliche Angebote vor. Die Standortfestlegung ermöglicht eine gezielte Suche 
    in bestimmten Regionen. Basierend auf dem erstellten Nutzerprofil zeigt die App relevante Firmen an. Zudem 
    besteht die Möglichkeit, interessante Stellenangebote zu speichern.
    ' />
  </div>
  );
};

/* ----- Unterkomponente ----- */
function MockupScreenL(props) {
  return (
    <div id='contentContainer2'>
      <img src={Screens} alt='Beispielhafte Darstellung der App' />
      <div id='stickyText'>
        <p id='titel2'>{props.mockupTitel}</p>
        <h1>{props.mockupHeading}</h1>
        <p>{props.mockupText}</p>
      </div>
    </div>
  );
};

function MockupScreenR(props) {
  return (
    <div id='contentContainer2'>
      <div id='stickyText'>
        <p id='titel2'>{props.mockupTitel}</p>
        <h1>{props.mockupHeading}</h1>
        <p>{props.mockupText}</p>
      </div>
      <img id='bildR' src={Screens} alt='Beispielhafte Darstellung von der App'/>
    </div>
  );
};