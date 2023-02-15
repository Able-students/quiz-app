import Header from "./Header";
import { Card, Row, Col, Button, Drawer } from 'antd';
import { useEffect, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import mainActions from "../store/actions/mainActions";
import { loadProductList } from "../store/actions/mainActions";

function Shop() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.mainReducer)
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(loadProductList())
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
        // console.log(count);
        arr.sort((a, b) => a.id - b.id);
        setFullTotal(total.toFixed(2));
        setBasket(arr);
    }, [state.basketList]);
    function delCard(id) {
        let arrN = state.basketList.filter(el => el.id !== id)
        mainActions.setBasketList(arrN);
    }
    function delCount(id) {
        let arrCopy = [...state.basketList];
        let index = arrCopy.findIndex(el => el.id === id)
        arrCopy.splice(index, 1);
        mainActions.setBasketList(arrCopy);
    }
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
                                extra={<Button shape="circle" onClick={() => mainActions.setBasketList([...state.basketList, elem])} icon={<ShoppingCartOutlined />} />}
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
                            <Row>
                                <Col span={16}>{
                                    (elem.count > 1) ? <button onClick={() => delCount(elem.id)}>count-1</button> : ''
                                }</Col>
                                <Col span={8}><button onClick={() => delCard(elem.id)}>Delete</button></Col>
                            </Row>
                        </Card>
                    )))
                }
                <p>Full total price: {fullTotal} $</p>
            </Drawer>
        </div>)
}


export default Shop