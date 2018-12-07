import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import './styles/setings/colors';

import App from './App.js';
import GlobalColors from './styles/setings/colors';

ReactDOM.render(
    <Fragment>
        <GlobalColors />
        <App />
    </Fragment>,
    document.getElementById('root')
);
