import React from 'react';
import ReactDOM from 'react-dom';
import JobDescription from './JobDescription';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<JobDescription />, document.getElementById('root'));
registerServiceWorker();
