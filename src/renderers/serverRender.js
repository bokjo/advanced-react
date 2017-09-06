import React          from 'react';
import ReactDOMServer from 'react-dom/server';
import App            from 'components/App';
import axios          from 'axios';
import StateApi       from '../api/state-api';

import config from '../lib/config';

const serverRender = async () => {
  // TODO: implement axios for data fetch from the data api through http
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const store    = new StateApi(response.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: response.data,
  };
};

export default serverRender;
