import React from 'react';
import { useCodeBlockState } from './component';

const CodeBlock = (props) => {
    const {
        ref
    } = useCodeBlockState();

    return (
        <pre>
            <code ref={ref} className={`language-${props.language}`}>{props.value}</code>
        </pre>
    );
};

export default CodeBlock;