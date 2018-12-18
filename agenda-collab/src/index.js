import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import GlobalColors from './styles/settings/colors';
import GlobalSize from './styles/settings/size';

ReactDOM.render(
    <Fragment>
        <GlobalColors />
        <GlobalSize />
        <App />
    </Fragment>,
    document.getElementById('root')
);
