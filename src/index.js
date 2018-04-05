import React from 'react';
import ReactDOM from 'react-dom';
import JobDescription from './JobDescription';
import Selection from './selection';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Selection />, document.getElementById('root'));

// ReactDOM.render(<JobDescription />, document.getElementById('root'));
registerServiceWorker();
