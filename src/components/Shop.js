import Header from "./Header";
import { Card, Row, Col, Button, Drawer } from 'antd';
import { initialState, reducer } from '../store';
import { useEffect, useReducer, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

import axios from 'axios';

function Shop() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                dispatch({ type: "setProductList", payload: res.data })
            }).catch(e => {
                console.log(e.response);
            })
    }, []);

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

    return (
        <div>
            <Header basketItems={state.basketList.length} showDrawer={showDrawer} />
            <Row>
                {
                    state.productList.map((elem => (
                        <Col span={6} key={elem.id} style={{ marginBottom: '10px' }}>
                            <Card
                                title={elem.title}
                                bordered={true}
                                extra={<Button shape="circle" onClick={() => dispatch({ type: "setBasketList", payload: [...state.basketList, elem] })} icon={<ShoppingCartOutlined />} />}
                                style={{
                                    width: 300,
                                }}
                            >
                                <img src={elem.image} style={{ width: '100%' }} alt={elem.title} />
                                <p>{elem.description}</p>
                                <h3>{elem.price} $</h3>
                            </Card>
                        </Col>
                    )))
                }
            </Row>
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
        </div>)
}


export default Shop