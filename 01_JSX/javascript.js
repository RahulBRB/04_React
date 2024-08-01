import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<h1>2+3</h1>); //will print 2+3, is displayed as a string
root.render(<h1>{2+3}</h1>); //will print 5 using curly bracket it gets treated as a javascript

const math = <h1>2 + 3 = {2 + 3}</h1>;
root.render(math);