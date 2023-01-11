import { useState } from "react"

function Question(props){
    const {question, options, id, answer} = props.data
    const {setAnswer, answerList, isCheck} = props
    const [userAnswer,setUserAnswer] = useState('')
    function saveAnswer(value){
        setUserAnswer(value)
        let saved = answerList.filter(elem => elem.id !== id)
        saved.push({
            id,
            answer: value
        })
        setAnswer(saved)
    }
    
    return <div>
        <h3>{question}</h3>
        {
            options.map((variant,i) => (
                <div className="row" key={i}>
                    <input type='radio' className="options" name={'question' + id} value={variant} onChange={(e) => saveAnswer(e.target.value)}/>
                    <p style={{backgroundColor: (isCheck && +userAnswer === variant) ? (+userAnswer ===  answer)  ? 'green' : 'red' : ''}} >{variant}</p>
                </div>
            ))
        }
    </div>
}

export default Question