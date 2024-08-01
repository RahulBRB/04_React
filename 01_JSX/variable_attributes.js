// Use a variable to set the `height` and `width` attributes:
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

// const sideLength = "200px";

// const panda = (
//   <img 
//     src="images/panda.jpg" 
//     alt="panda" 
//     height={sideLength} 
//     width={sideLength} />
// );

const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
  }; 
  
  const panda = (
    <img 
      src={pics.panda} 
      alt="Lazy Panda" />
  );
  
  const owl = (
    <img 
      src={pics.owl} 
      alt="Unimpressed Owl" />
  );
  
  const owlCat = (
    <img 
      src={pics.owlCat} 
      alt="Ghastly Abomination" />
  ); 

  
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

const gooseImg = (
  <img src={goose} />
)
root.render(gooseImg);