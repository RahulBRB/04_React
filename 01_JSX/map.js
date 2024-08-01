import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

//Below, 'i' is the current index of beginning person, but not required in this example
const peopleList = people.map((person,i) =>
  <li>{person}</li>
);

root.render(
  <ul>{peopleList}</ul>
)
