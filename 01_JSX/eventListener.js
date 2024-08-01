import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function makeDoggy(e) {
  e.target.setAttribute('src', 'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
    onClick={makeDoggy}
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

root.render(kitty);