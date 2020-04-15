import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from 'components/views/profile';
// import Pages from 'components/views/pages';

const Pages = React.lazy(() => import('components/views/pages'));

const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/pages" component={Pages} />
                <Route path="/" component={Profile} />
            </Switch>
        </Suspense>
    );
};

export default Router;