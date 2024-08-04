import React from 'react';

const myStyle = {
  background: 'lightblue',
  color:'darkblue'
}

function StyleDemo() {
  return (
    <>
      <h1 style={{background: 'lightgreen', color:'darkgreen'}}>Style This With Inline Styling</h1>  //Inline Styling
      <h1 style={myStyle}>Style This With Style Object Variable</h1>                                 //Style Object Variable
    </>
  );
}

export default StyleDemo