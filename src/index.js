// src/index.js
import greet from './utils';
import './styles.css';

const message = greet('Webpack');
console.log(message);

// For demonstration purposes, you might want to interact with the DOM
document.getElementById('app').innerHTML = `<h1>${message}</h1>`;
