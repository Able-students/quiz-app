import { useNavigate } from "react-router-dom"
import { initialState, reducer } from '../store'
import { useReducer } from 'react'

import CounterApp from './CounterApp'
const Menu = () => {
    let navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer,initialState)
    return(
        <nav>
            <button onClick={() => navigate('/quiz')}>Quiz app</button>
            <button onClick={() => navigate('/contact')}>Contact app</button>
            <button onClick={() => navigate('/slider')}>Slider</button>
            <h1>{state.counter}</h1>
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>+</button>
            <hr/>
            <CounterApp />
        </nav>
    )
}
export default Menu
