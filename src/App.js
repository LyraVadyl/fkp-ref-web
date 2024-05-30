// React
import React from 'react';

// Stylesheet
import './App.css';

// Components
//import NavMenu from './components/NavMenu.jsx';
import TitleCard from './components/TitleCard.jsx';
import Intro from './components/Intro.jsx';
import Mockups from './components/Mockups.jsx';
import Leistungen from './components/Leistungen.jsx';
import Zahlen from './components/Zahlen.jsx';
import Ergebnisse from './components/Ergebnisse.jsx';
import FAQ from './components/FAQ.jsx';
//import Kontakt from './components/Kontakt.jsx';
//import Footer from './components/Footer.jsx';
//import FooterImpressum from './components/FooterImpressum.jsx';

export default function App() {
  return (
    <>
      <TitleCard />
      <Intro />
      <Mockups />
      <Leistungen />
      <Zahlen />
      <Ergebnisse />
      <FAQ />
    </>
  );
}
//Rauskommentiert weil bereits vorhanden
//Komponenten und Css Dateien in deprecated Ordner
//<NavMenu />
//<Kontakt />
//<Footer />
//<FooterImpressum />