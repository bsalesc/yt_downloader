import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Welcome } from './components/Welcome';

declare let module: any;

ReactDOM.render(<Welcome />, document.getElementById('root'));

if (module.hot) module.hot.accept();
