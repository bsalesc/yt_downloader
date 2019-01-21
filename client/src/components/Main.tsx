import React from 'react';
import { useState } from 'react';

import styles from './Main.scss';

const LazyComponent = React.lazy(() => import('./ThirdComponent'));

export const Main = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Welcome to downloader.</h1>
      <button className={styles.button} onClick={() => setShow(!show)}>
        Ok
      </button>
      {!show || (
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <LazyComponent />
        </React.Suspense>
      )}
    </>
  );
};
