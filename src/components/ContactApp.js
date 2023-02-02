import { useEffect, useState } from "react"
import axios from 'axios'
import Menu from './Menu'

function ContactApp() {
    const [list, setList] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    useEffect(() => {
        // fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
        // .then(body => body.json()).then(function(data){
        //     setList(data)
        // }).catch(e=>{
        // console.log(e);
        //})
        axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
            .then(res => {
                setList(res.data)
            }).catch(e => {
                console.log(e.response);
            })
    }, [])
    function searchContact() {
        axios.get(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=${firstName.length > 0 ? firstName : "%7BfirstName%7D"}&lastName=${lastName.length > 0 ? lastName : "%7BlastName%7D"}&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
            .then(res => {
                setList(res.data)
            }).catch(e => {
                console.log(e.response);
            })
    }
    return (
        <div>
            <Menu />
            <h1>Contact App</h1>
            {/* {list.map((contact,i) => (
                <div key={i}>{contact.firstName} {contact.lastName}</div>
            ))} */}
            <div>
                <input placeholder="Enter firstname" onChange={(e) => setFirstName(e.target.value)} />
                <input placeholder="Enter lastname" onChange={(e) => setLastName(e.target.value)} />
                <button onClick={searchContact}>Search</button>
            </div>
            <table border={'1'}>
                <thead>
                    <tr><th>Name</th><th>Surname</th><th>Phone</th></tr>
                </thead>
                <tbody>
                    {list.map((contact, i) => (
                        <tr key={i}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ContactApp