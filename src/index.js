import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import constants from './constants'

const SENTRY_DSN = "https://84525b373b9474b69bd9a6243c119d22@o4506650230194176.ingest.sentry.io/4506650231898112";

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: (constants.STAGE === 'production') && [
    new Sentry.BrowserTracing({      
      tracePropagationTargets: ['https://hidden-pad-313204.as.r.appspot.com'],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
