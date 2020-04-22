import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NormilizeCSS } from './components/normalize-css';
import Router from 'components/router';

function App() {
    return (
        <BrowserRouter>
            <NormilizeCSS />
            <Router />
        </BrowserRouter>
    );
}

export default App;
