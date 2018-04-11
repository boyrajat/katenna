import React from 'react';
import ReactDom from 'react-dom';
import Main from './Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render(<Main />, document.getElementById('react-app'));


