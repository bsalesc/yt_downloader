import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/Main';

declare let module: any;

ReactDOM.render(<Main />, document.getElementById('root'));

if (module.hot) module.hot.accept();
