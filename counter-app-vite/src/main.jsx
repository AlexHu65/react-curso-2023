import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';
import { CounterApp } from './components/CounterApp';
import { FirstApp } from './components/FirstApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Es el titulo'/>
        {/*<CounterApp value={10}/>*/}
    </React.StrictMode>
)