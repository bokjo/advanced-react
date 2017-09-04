import React from 'react';
import reactDOMServer from 'react-dom/server';
import App from '../src/components/App';


const serverRender = () => {
  return reactDOMServer.renderToString(
    <App />
  );
};

export default serverRender;
