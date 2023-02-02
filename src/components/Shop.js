import Header from "./Header";
import { Card, Row, Col, Button, Drawer } from 'antd';
import { initialState, reducer } from '../store';
import { useEffect, useReducer, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

import axios from 'axios';

function Shop(){
    const [state,dispatch] = useReducer(reducer,initialState)
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
            dispatch({type: "setProductList", payload: res.data})
        }).catch(e => {
            console.log(e.response);
        })
    },[])
    return(
    <div>
        <Header basketItems={state.basketList.length} showDrawer={showDrawer}/>
        <Row>
        {
            state.productList.map((elem => (
                <Col span={6} key={elem.id} style={{marginBottom: '10px'}}>
                    <Card
                        title={elem.title}
                        bordered={true}
                        extra={<Button shape="circle" onClick={() =>  dispatch({type: "setBasketList", payload: [...state.basketList, elem] })} icon={<ShoppingCartOutlined />} />}
                        style={{
                        width: 300,
                        }}
                    >
                        <img src={elem.image}  style={{ width: '100%'}} alt={elem.title} />
                        <p>{elem.description}</p>
                        <h3>{elem.price} $</h3>
                    </Card>
                </Col>
            )))
        }
        </Row>
        <Drawer title="Basket" placement="right" onClose={onClose} open={open}>
        {
            state.basketList.map(((elem,i) => (
                <Card
                    key={i}
                    style={{
                    width: 300,
                    marginBottom: '10px'
                    }}
                >
                    <Row align='middle'>
                        <Col span={12}>
                            <img src={elem.image}  style={{ width: '70%'}} alt={elem.title} />
                        </Col>
                        <Col span={12}>
                            <h4>{elem.title}</h4>
                            <p>{elem.category}</p>
                            <h3>{elem.price} $</h3>
                            <span>Quantity: 1</span>
                        </Col>
                    </Row>
                </Card>
            )))
        }
        </Drawer>
    </div>)
}


export default Shop