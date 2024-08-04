import React from 'react';
const myStyle = {
  background: 'lightblue',
  color: 'darkblue',
  marginTop: 100,  //No need to write px. It is automatically added and assumed.
  fontSize: 50 
}

function StyleDemo() {
  return <button style={myStyle}>button</button> //This is how you apply styles in React.
}

export default StyleDemo