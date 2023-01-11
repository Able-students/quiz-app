import { useState } from 'react'
import { quiz_list } from '../constants/'
import Question from './Question'

function QuizApp() {
    const [answer,setAnswer] = useState([])
    const [score,setScore] = useState(0)
    const [isCheck,setCheck] = useState(false)
    const [list,setList] = useState(quiz_list)

    function check(){
      let tempScore = 0
      setCheck(true)
      answer.forEach(elem => {
        let otvet = quiz_list.find(item => item.id === elem.id)
        if(otvet){
          if(otvet.answer === +elem.answer){
            tempScore += otvet.score
          }
        }
      })
      setScore(tempScore)
    //  setList([])
    }
    function reset(){
      setCheck(false)
      setAnswer([])
      setScore(0)
      setList(quiz_list)
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
            <Question data={data} key={data.id} isCheck={isCheck} answerList={answer} setAnswer={setAnswer}/>
          ))
        }
        {!isCheck ? <button onClick={check}>Check</button> : <button onClick={reset}>Reset</button>}
      </div>
    );
  }
  
export default QuizApp;