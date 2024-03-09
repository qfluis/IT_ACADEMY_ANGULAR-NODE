import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* PRUEBAS
const nombre = 'Luis';
const Componente = () =>
<ul>
  <li>Uno</li>
  <li>Dos</li>
  <li>Tres</li>
</ul>

const Li = ({children, estado}) =>
  <li>Nombre: {children} - Estado: {estado}</li>

const Componente2 = () =>
<ul>
  <Li estado={'Contento'}>Luis</Li>
  <Li estado={'Feliz'}>Cris</Li>
  <Li estado={'Dormida'}>Sara</Li>
</ul>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    Holiwi de kiwi {nombre}
    <Componente />
    <Componente2 />
  </div>
); 
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
