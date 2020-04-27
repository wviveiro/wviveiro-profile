import React from 'react';
import { useMarkdownState } from './component';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './code-block';
import HeadingBlock from './heading-block';
import LinkBlock from './link-block';

const Markdown = (props) => {
    
    const {
        markdown
    } = useMarkdownState(props);

    return (
        <div className={`markdown-body`}>
            <ReactMarkdown 
                source={markdown} 
                renderers={{code: CodeBlock, heading: HeadingBlock, link: LinkBlock}}
                escapeHtml={false}
            />
        </div>
    );
};

export default Markdown;