import React from 'react';
import { HashRouter } from 'react-router-dom';
import { NormilizeCSS } from './components/normalize-css';
import Router from 'components/router';

function App() {
    return (
        <HashRouter>
            <NormilizeCSS />
            <Router />
        </HashRouter>
    );
}

export default App;
