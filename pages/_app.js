import '@/styles/globals.css';
import React, { useEffect } from 'react';
import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader';
/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
import { setupIonicReact } from '@ionic/react';
setupIonicReact();
import NonSSRWrapper from '@/components/NonSSRWrapper';

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   ionDefineCustomElements(window);
  // });
  return (
    // <NonSSRWrapper>
    <Component {...pageProps} />
    // </NonSSRWrapper>
  );
}
