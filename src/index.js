import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <App2 />
);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
    <App3 />
);

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
    <App4 />
);