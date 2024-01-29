'use client'

import App from "./App";
import styles from "./page.module.css";
import constants from "./constants";

import * as Sentry from "@sentry/react";

const SENTRY_DSN = "https://84525b373b9474b69bd9a6243c119d22@o4506650230194176.ingest.sentry.io/4506650231898112";

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: (constants.STAGE === 'production') ? [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ['https://hidden-pad-313204.as.r.appspot.com'],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ] : [],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

export default function Home() {
  return (
    <main className={styles.main}>
      <App />
    </main>
  );
}
