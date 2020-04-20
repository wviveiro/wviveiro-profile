import React from 'react';
import { PagesContainer, PagesHeader, PagesContent } from './style';
import { Link, Switch, Route } from 'react-router-dom';


// Pages

const Markdown =  React.lazy(() => import('components/markdown'));

const PagesLoader = (page) => () => <Markdown path={`${process.env.REACT_APP_PATH_MD}${page}`} />




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
                    <Route path="/br/pages/como-se-tornar-frontend-dev-1" component={PagesLoader('/pages/br/como-se-tornar-frontend-dev-1/README.md')} />
                </Switch>
            </PagesContent>
        </PagesContainer>
    );
};

export default Pages;