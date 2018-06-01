import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles.css';

document.title = "alex@wilson: ~$";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
