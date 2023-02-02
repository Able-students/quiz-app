import { useReducer } from 'react'
import Menu from './Menu'

import { initialState, reducer } from '../store'

function CounterApp() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log(state);
    return (
        <div>
            <Menu />
            <h3>{state.userInfo.name} {state.userInfo.surname}</h3>
            <button onClick={() => dispatch('decrement')}>-</button>
            <h3>{state.counter}</h3>
            <button onClick={() => dispatch('increment')}>+</button>
            <hr />
            <input placeholder='Enter name' onChange={(e) => dispatch({ type: 'changeName', payload: e.target.value })} />
            <input placeholder='Enter surname' onChange={(e) => dispatch({ type: 'changeSurname', payload: e.target.value })} />
        </div>
    )
}

export default CounterApp;