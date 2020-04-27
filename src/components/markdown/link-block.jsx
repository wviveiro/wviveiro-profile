import React from 'react';

const LinkBlock = (props) => {
    const {href} = props;

    const youtubestr = 'https://www.youtube.com';

    if (href.substr(0, youtubestr.length) === youtubestr) {
        return (
            <iframe 
                src={href}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen={true}
                style={{
                    width: '100%',
                    display: 'block',
                    height: '315px',
                    maxWidth: '560px',
                    margin: '10px auto',
                }}
                title={props.children}
           />
        )
    }

    return (
        <a href={href}>{props.children}</a>
    );
};

export default LinkBlock;