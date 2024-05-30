// React
import React from 'react';

// Stylesheet
import '../App.css';
import '../css/Intro.css';

// Graphics
import AppStoreIcon from '../assets/images/app-store-icon.svg';
import PlayStoreIcon from '../assets/images/play-store-icon.svg';
import LinkIcon from '../assets/images/link-icon.svg';

export default function Intro() {
  return (
    <div id='contentContainer'>
      <div>
        <div id='tags'></div>
        <div id='links'>
          <img src={AppStoreIcon} alt='App Store Icon' />
          <href>App Store</href>
          <img src={PlayStoreIcon} alt='Play Store Icon' />
          <href>Play Store</href>
          <img src={LinkIcon} alt='Link Icon' />
          <href>Link</href>
        </div>
      </div>
      <div id='text'>
        <h1>Per Match zum Traumjob in der Metall- und Elektro-industrie</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Rhoncus faucibus faucibus ornare facilisi eu. Aliquet adipiscing neque sed sit viverra neque dolor. Interdum porta eleifend a posuere egestas dui. Auctor enim viverra fermentum mattis purus aliquam viverra arcu.</p>
        <p>Amet id est adipiscing eget. Laoreet aliquam nec nisl mollis gravida at. Ullamcorper orci amet tristique mauris amet tellus. Lectus arcu in venenatis lacus aliquam sollicitudin id sit. Facilisi eget nunc dolor aliquam et lectus nec risus.</p>
        <p>Euismod purus consectetur morbi nulla. Rhoncus ac augue aliquet sagittis eu magna tempus sed. Erat etiam integer viverra nibh cras in morbi blandit. Viverra nullam sollicitudin aliquam tortor id. Luctus tellus nisl bibendum sed amet odio. Nulla turpis at pretium proin hendrerit feugiat commodo tincidunt magnis. Mus pretium ut tincidunt senectus sed.</p>
      </div>
    </div>
  );
};