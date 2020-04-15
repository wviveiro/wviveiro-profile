import { useEffect, useState, useRef } from "react";
import slugify from 'slugify';

export const useMarkdownState = (props) => {
    const [markdown, setMarkdown] = useState();

    useEffect(() => {
        fetch(props.path).then((response) => response.text()).then((response) => {
            setMarkdown(response);
        });
    }, [props.path]);

    return {
        markdown
    }
}

export const useCodeBlockState = () => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current && window.hljs) {
            window.hljs.highlightBlock(ref.current);
        }
    }, []);

    return {
        ref
    }
}

export const useHeadingBlockState = (props) => {
    const [anchor, setAnchor] = useState('');

    useEffect(() => {
        let value = slugify((props.children[0]?.props?.value || '').toLowerCase());
        value = `/pages/${value}`;
        setAnchor(value);
    }, [props.children]);

    return {anchor}
}