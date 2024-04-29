import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this path matches the location of your App.jsx file
import './tailwind.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
