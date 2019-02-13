import React from 'react';
import { useState } from 'react';

import { Header } from './Header';
import { ListLink } from './ListLink';

const LazyComponent = React.lazy(() => import('./ThirdComponent'));

export const Main = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header />
      <ListLink />
      {/* <div>
        <h1>Welcome to downloader.</h1>
        <button className={styles.button} onClick={() => setShow(!show)}>
          Ok
        </button>
        {!show || (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <LazyComponent />
          </React.Suspense>
        )}
      </div> */}
    </>
  );
};
