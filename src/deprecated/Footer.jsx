// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/Footer.css';

// Graphics
import MadeInGermany from '../assets/images/made-in-germany.svg';
import InstaIcon from '../assets/images/insta-icon.svg';
import LinkedInIcon from '../assets/images/linkedin-icon.svg';
import DDLogo from '../assets/images/Logo.svg';

export default function Footer() {
  return (
    <div id='contentContainer9'>
      <div id='footerNavigation'>
        <img id='footerLogo' src={DDLogo} alt='Default Digital Logo'/>
        <div id='title9'>NAVIGATION</div>
        <p>LEISTUNGEN</p>
        <p>REFERENZEN</p>
        <p>INSIGHTS</p>
        <p>ÜBER UNS</p>
        <p>KARRIERE</p>
        <img id='MiG' src={MadeInGermany} alt='Made & Hosted in Germany'/>
      </div>
      <div id='beschreibung'>
        <h1>Default Digital GmbH & Co. KG</h1>
        <p id='beschreibungText'>Zusammen mit unserem Partner STRIKE DESIGN, bieten wir seit über 14 Jahren individuelle Softwarelösungen an. Von geradlinigen Websites, über individuelle App Entwicklungen bis hin zu Enterprise Plattformen bieten wir ein umfassendes Spektrum an, um auch Ihr Unternehmen auf das nächste Level zu bringen.</p>
        <div id='socialLinks'>
          <img src={InstaIcon} alt='Instagram Icon' />
          <p>Instagram</p>
          <img src={LinkedInIcon} alt='LinkedIn Icon' />
          <p>Linkedin</p>
        </div>
        <div id='agentur'>
          <div id='title10'>AGENTUR</div>
          <div id='agenturListe'>
            <div>
              <p>Digitalagentur</p>
              <p>Softwareentwicklung Agentur</p>
              <p>E-Commerce Agentur</p>
              <p>KI Agentur</p>
              <p>Affiliate Marketing Agentur</p>
              <p>Webdesign Agentur</p>
            </div>
            <div>
              <p>Influencer Marketing Agentur</p>
              <p>Instagram Agentur</p>
              <p>Social Media Agentur</p>
              <p>Performance Marketing Agentur</p>
              <p>Marketing Agentur Dresden</p>
              <p>Full Service Agentur</p>
            </div>
            <div>
              <p>Software Agentur Dresden</p>
              <p>SEO Agentur</p>
              <p>Online Marketing Agentur</p>
              <p>Adwords Agentur</p>
              <p>Mediaagentur</p>
              <p>Amazon Agentur</p>
            </div>
            <div>
              <p>DevOps Agentur</p>
              <p>Design Agentur Dresden</p>
              <p>App Agentur</p>
              <p>Design Agentur</p>
              <p>YouTube Agentur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};