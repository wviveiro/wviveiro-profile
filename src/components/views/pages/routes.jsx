import React from 'react';
import PagesLoader from './page-loader';
import { Switch, Route } from 'react-router-dom';

const PageRoutes = () => {
    return (
        <Switch>
            <Route path="/pages/br/como-se-tornar-frontend-dev-1" component={PagesLoader('/pages/br/como-se-tornar-frontend-dev-1/README.md')} />
        </Switch>
    );
};

export default PageRoutes;