// const element = document.createElement('h1');
// element.innerText = 'Hola mundo, primer h1';

// const container = document.getElementById('app');
// container.appendChild(element)

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hola Mundo, Provando React JSX, y el git</h1>
const container = document.getElementById('app');
// ReactDOM.render(__que__, __donde__);
ReactDOM.render(element,container);