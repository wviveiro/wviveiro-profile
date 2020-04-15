import React from 'react';
import { useHeadingBlockState } from './component';

const HeadingBlock = (props) => {
    const {
        anchor
    } = useHeadingBlockState(props);
    
    const content = (
        <React.Fragment>
            {/* eslint-disable-next-line */}
            {!!anchor && (<a id={`${anchor}`} />)}
            {props.children}
        </React.Fragment>
    );


    switch (props.level) {
        case 1:
            return <h1>{content}</h1>
            case 2:
                return <h2>{content}</h2>
            case 3:
                return <h3>{content}</h3>
            case 4:
                return <h4>{content}</h4>
            case 5:
                return <h5>{content}</h5>
            default:
                return <h6>{content}</h6>
    }
};

export default HeadingBlock;