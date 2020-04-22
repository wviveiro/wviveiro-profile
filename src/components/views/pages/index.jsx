import React from 'react';
import { PagesContainer, PagesHeader, PagesContent } from './style';
import { Link } from 'react-router-dom';
import Routes from './routes';




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
                <Routes />
            </PagesContent>
        </PagesContainer>
    );
};

export default Pages;