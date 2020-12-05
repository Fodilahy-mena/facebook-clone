import React from 'react'
import App from './pages/App'
import ReactDom from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom';
import {ContextProvider} from './Context';

ReactDom.render(
    <ContextProvider>
        <Router>
            <App/>
        </Router>
    </ContextProvider>
, document.getElementById('root'));