import { useReducer } from 'react'
import { quiz_list } from '../constants/'
import Question from './Question'
import { initialState, reducer } from '../store'

function QuizApp() {
    const [state, dispatch] = useReducer(reducer,initialState)
    // const [answer,setAnswer] = useState([])
    // const [score,setScore] = useState(0)
    // const [isCheck,setCheck] = useState(false)
    // const [list,setList] = useState(quiz_list)
    const {score, isCheck, list, answer} = state
    function check(){
      let tempScore = 0
      // setCheck(true)
      dispatch({type: 'setCheck', payload: true})
      answer.forEach(elem => {
        let otvet = quiz_list.find(item => item.id === elem.id)
        if(otvet){
          if(otvet.answer === +elem.answer){
            tempScore += otvet.score
          }
        }
      })
      // setScore(tempScore)
      dispatch({type: 'setScore', payload: tempScore})
    //  setList([])
    }
    function reset(){
      // setCheck(false)
      dispatch({type: 'setCheck', payload: false})
      // setAnswer([])
      dispatch({type: 'setAnswer', payload: []})
      // setScore(0)
      dispatch({type: 'setScore', payload: 0})
      // setList(quiz_list)
      dispatch({type: 'setList', payload: quiz_list})
      let options = document.getElementsByClassName('options')
      for(let i = 0; i < options.length; i++){
        options[i].checked = false
      }
    }
    return (
      <div>
        <h1>Quiz App</h1>
        <img src='/images/logo192.png' alt='elem'/>
        {isCheck ? <h1>Score: {score}</h1> : ''}
        {
          list.map(data => (
            <Question data={data} key={data.id} isCheck={isCheck} answerList={answer} setAnswer={(arr) => dispatch({type: 'setAnswer', payload: arr})}/>
          ))
        }
        {!isCheck ? <button onClick={check}>Check</button> : <button onClick={reset}>Reset</button>}
      </div>
    );
  }
  
export default QuizApp;