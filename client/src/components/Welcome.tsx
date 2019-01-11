import * as React from 'react';
import { useState } from 'react';

export const Welcome = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <h1>Welcome to downloader.</h1>
      <button onClick={() => setShow(!show)}>Ok</button>
      {!show || <h2>:)</h2>}
    </React.Fragment>
  );
};
