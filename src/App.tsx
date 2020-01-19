import React, {Fragment, useContext, useEffect} from 'react';
import {Store} from './Store';

export default function App() : JSX.Element {
    const [state, dispatch] = useContext(Store);
    useEffect(() => {
        if (state.episodes.length() === 0) {
            fetchDataAction()
        }
    });

    const fetchDataAction = async () => {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
        const data = await fetch(URL);
        const dataJson = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJson._embedded.episodes
        });
    }
    return (
        <Fragment>
            <h1>Rick and Morty</h1>
            <p>Pick your favorite episode!!!</p>
            <section>
                {state.episodes.map((episode:any) => {
                    return (<section id={episode.id}>
                        <img src={episode.image.medium} alt={episode.name} />
                        <div>{episode.name}</div>
                        <section>
                            Season: {episode.season} Number: {episode.number}
                        </section>
                    </section>);
                })}
            </section>
        </Fragment>
    )
}
