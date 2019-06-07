import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import 'inobounce';

import {integrationUtils} from 'utils';
import configureStore from './stores';

import MainContainer from './containers/Main';

const store = configureStore();

(async function() {
  const applicationPlaceholderElement = await integrationUtils.initializeReactJsApplication();
  if (applicationPlaceholderElement) {
    render((
        <Provider store={store}>
          <MainContainer />
        </Provider>
      ),
      applicationPlaceholderElement
    );
  }
})();
