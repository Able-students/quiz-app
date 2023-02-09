import Menu from './Menu'
import { useSelector, useDispatch } from 'react-redux';
function CounterApp() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.mainReducer)
    // console.log(state);
    return (
        <div>
            <Menu />
            <h3>{state.userInfo.name} {state.userInfo.surname}</h3>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <h3>{state.counter}</h3>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <hr />
            <input placeholder='Enter name' onChange={(e) => dispatch({ type: 'changeName', payload: e.target.value })} />
            <input placeholder='Enter surname' onChange={(e) => dispatch({ type: 'changeSurname', payload: e.target.value })} />
        </div>
    )
}

export default CounterApp;