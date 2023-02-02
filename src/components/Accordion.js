import Menu from './Menu'
import { useReducer } from 'react'
import '../styles/Accordion.css'
import { initialState, reducer } from '../store'

const AccordionItem = ({ el }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="Accordion-Item">
            <header
                className="Accordion-Header"
                onClick={() => dispatch({ type: 'setCheck', payload: !state.isCheck })}
            >
                <h3>{el.title}</h3>
                <span>{state.isCheck ? '-' : '+'}</span>
            </header>
            {state.isCheck && <div className="Accordion-Content">{el.content}</div>}
        </div >
    )
}

export default function Accordion() {
    const accordionData = [
        {
            title: 'Accordion 1',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },
        {
            title: 'Accordion 2',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },
        {
            title: 'Accordion 3',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        }
    ]

    return (
        <>
            <Menu />
            <div className="Accordion">
                {accordionData.map((el, i) => (
                    <AccordionItem key={i} el={el} />
                ))}
            </div>
        </>

    )
}