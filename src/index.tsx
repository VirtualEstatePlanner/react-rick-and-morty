import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {StoreProvider} from './Store';
import App from './App';

const root = document.getElementById('app-root');
ReactDOM.render(<StoreProvider><App/></StoreProvider>, root);