import { useState, useEffect } from 'react'
import '../styles/LoginForm.css'
import { useSelector, useDispatch } from 'react-redux';
import { Card, Row, Col, Drawer } from 'antd';
import Header from './Header';

function Form() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.mainReducer)
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const [basket, setBasket] = useState([]);
    const [fullTotal, setFullTotal] = useState(0);
    useEffect(() => {
        let arr = [];
        let count = {};
        let total = 0;
        state.basketList.forEach(element => {
            if (count[element.id] === undefined) {
                count[element.id] = 1;
            } else {
                count[element.id]++;
            }
            element.count = count[element.id]
            total += +element.price;
            if (!arr.includes(element)) {
                arr.push(element);
            }
        })
        console.log(count);
        setFullTotal(total.toFixed(2));
        setBasket(arr);
    }, [state.basketList]);
    // console.log(state);
    function checkLogin() {
        if (state.userInfo.name === state.changeUser.name) {
            if (state.userInfo.email === state.changeUser.email) {
                if (state.userInfo.password === state.changeUser.password) {
                    alert(`«Добро пожаловать, ${state.userInfo.name}»`);
                } else {
                    alert('Не верный пароль');
                }
            } else {
                alert('Не верный email');
            }
        } else {
            alert('Нет такого пользователя');
        }
    }
    return (
        <div className='Form'>
            <Header basketItems={state.basketList.length} showDrawer={showDrawer} />
            <h2 className='Form-Title'>Login form</h2>
            <div className='Form-Box'>
                <input className='Form-Inp Login' type={'text'} placeholder='Enter name' onChange={(e) => dispatch({ type: 'changeName', payload: e.target.value })} />
                <input className='Form-Inp Email' type={'email'} placeholder='Enter email' onChange={(e) => dispatch({ type: 'changeEmail', payload: e.target.value })} />
                <input className='Form-Inp Password' type={'password'} placeholder='Enter password' onChange={(e) => dispatch({ type: 'changePass', payload: e.target.value })} />
                <input className='Form-Inp Btn' type={'submit'} value={'Click'} onClick={checkLogin} />
            </div>
            <Drawer title="Basket" placement="right" onClose={onClose} open={open}>
                {
                    basket?.map((elem => (
                        <Card
                            key={elem.id}
                            style={{
                                width: 300,
                                marginBottom: '10px'
                            }}
                        >
                            <Row align='middle'>
                                <Col span={12}>
                                    <img src={elem.image} style={{ width: '70%' }} alt={elem.title} />
                                </Col>
                                <Col span={12}>
                                    <h4>{elem.title}</h4>
                                    <p>{elem.category}</p>
                                    <h3>{elem.price} $</h3>
                                    <span>Quantity: {elem.count}</span>
                                    <p>Total price: {elem.count * elem.price} $</p>
                                </Col>
                            </Row>
                        </Card>
                    )))
                }
                <p>Full total price: {fullTotal} $</p>
            </Drawer>
        </div>
    )
}

export default Form;