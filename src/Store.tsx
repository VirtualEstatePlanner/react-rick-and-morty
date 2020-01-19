import React, {useReducer} from 'react';
interface IState {
    episodes: string[],
    favorites: string[]
};

interface IAction {
    type: string,
    payload: any
};

const initialState : IState = {
    episodes: [],
    favorites: []
};
export const Store = React.createContext<IState | any>(initialState);
function reducer(state: IState, action: IAction): IState {
    console.log('++++ came inside reducer ++++');
    switch(action.type) {
        case 'FETCH_DATA':
            return {...state, episodes: action.payload};
        default:
            return state;
    }
}
export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{props.childen}</Store.Provider>
}