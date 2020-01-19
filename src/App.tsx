import React, {Fragment, useContext, useEffect} from 'react';
import {Store} from './Store';
import './index.css';

interface IEpisode {
    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: {medium: string, original: string}
    name: string
    number: number
    runtime: number
    season: number
    summary: string
    url: string
}

export default function App() : JSX.Element {
    const {state, dispatch} = useContext(Store);
    useEffect(() => {
        if (state.episodes.length === 0) {
            console.log('making remote call')
            fetchDataAction()
        } else {
            console.log('data is already present. not making remote call')
        }
    });

    const fetchDataAction = async () => {
        const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
        const dataJson = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJson._embedded.episodes
        })
    }
    return (
        <Fragment>
            <header className="header">
                <h1>Rick and Morty</h1>
                <p>Pick your favorite episode!!!</p>
            </header>
            <section className="episode-layout">
                {state.episodes.map((episode:IEpisode) => {
                    return (
                        <section key={episode.id} className="episode-box">
                            <img src={episode.image.medium} alt={episode.name} />
                            <div>{episode.name}</div>
                            <section>
                                Season: {episode.season} Number: {episode.number}
                            </section>
                        </section>
                    );
                })}
            </section>
        </Fragment>
    )
}
