import React from 'react';
import { PagesContainer, PagesHeader, PagesContent } from './style';
import { Link, Switch, Route } from 'react-router-dom';


// Pages
import page001 from 'components/views/pages/br/como-se-tornar-frontend-dev-1/README.md';

const Markdown =  React.lazy(() => import('components/markdown'));

const PagesLoader = (page) => () => <Markdown path={page} />




const Pages = () => {
    return (
        <PagesContainer>
            <PagesHeader>
                <Link to={'/'}>
                    <img src="/assets/images/me.jpg" alt="Wellington Viveiro" className="img-profile" />
                    <h1>Wellington Viveiro</h1>
                </Link>
            </PagesHeader>
            <PagesContent>
                <Switch>
                    <Route path="/pages/br/como-se-tornar-frontend-dev-1" component={PagesLoader(page001)} />
                </Switch>
            </PagesContent>
        </PagesContainer>
    );
};

export default Pages;