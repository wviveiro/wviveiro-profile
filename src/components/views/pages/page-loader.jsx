import React from 'react';

const Markdown =  React.lazy(() => import('components/markdown'));
const PagesLoader = (page) => () => <Markdown path={`${page}`} />

export default PagesLoader;