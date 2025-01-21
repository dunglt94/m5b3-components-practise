import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from "./components/App2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <App2 />
);
