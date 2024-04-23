import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Amplify from 'aws-amplify';

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://w322mgvuhfdafkd3o3ngxtf7ui.appsync-api.ap-south-1.amazonaws.com/graphql',
      region: 'ap-south-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-ifxqqjmslvh2ren36kcg4ht77a'
    }
  } 
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

