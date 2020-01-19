import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

export default function App() : JSX.Element {
    return (
        <Fragment>
            <h1>Rick and Morty</h1>
            <p>Pick your favorite episode!!!</p>
        </Fragment>
    )
}

const root = document.getElementById('app-root');
ReactDOM.render(<App/>, root);