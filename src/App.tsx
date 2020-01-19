import React, {Fragment, useContext, useEffect} from 'react';
import {Store} from './Store';

export default function App() : JSX.Element {
    console.log('+++++ came inside App +++++++ ');
    const {state, dispatch} = useContext(Store);
    useEffect(() => {
        console.log('came inside use effect')
        state.episodes.length === 0 && fetchDataAction()
    });

    const fetchDataAction = async () => {
        console.log('came inside fetch data');
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
        const data = await fetch(URL);
        const dataJson = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJson._embedded.episodes
        })
    }
    return (
        <Fragment>
            <h1>Rick and Morty</h1>
            <p>Pick your favorite episode!!!</p>
            {console.log(state)}
            {/* <section>
                {state.episodes.map((episode:any) => {
                    return (
                        <section id={episode.id}>
                            <img src={episode.image.medium} alt={episode.name} />
                            <div>{episode.name}</div>
                            <section>
                                Season: {episode.season} Number: {episode.number}
                            </section>
                        </section>
                    );
                })}
            </section> */}
        </Fragment>
    )
}
