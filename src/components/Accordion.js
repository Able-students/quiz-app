import Menu from './Menu'
import '../styles/Accordion.css'
import { useState } from 'react';

const AccordionItem = ({ el }) => {
    const [isCheck, setIsCheck] = useState(false);
    return (
        <div className="Accordion-Item">
            <header
                className="Accordion-Header"
                onClick={() => setIsCheck(!isCheck)}
            >
                <h3>{el.title}</h3>
                <span>{isCheck ? '-' : '+'}</span>
            </header>
            {isCheck && <div className="Accordion-Content">{el.content}</div>}
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