import React from 'react';
import { useMarkdownState } from './component';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './code-block';
import HeadingBlock from './heading-block';

const Markdown = (props) => {
    
    const {
        markdown
    } = useMarkdownState(props);

    return (
        <div className={`markdown-body`}>
            <ReactMarkdown 
                source={markdown} 
                renderers={{code: CodeBlock, heading: HeadingBlock}}
            />
        </div>
    );
};

export default Markdown;