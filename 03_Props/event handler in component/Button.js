import React from 'react';

function Button(props) {
    return (
      //Here onClick creates event Listener
      <button onClick={props.onClick}>
        Click me!
      </button>
    );
}

export default Button;