import Menu from '../Menu'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Row } from 'antd'

const Header = (props) => {
    return (
        <Row align='middle' justify="space-between">
            <Menu />
            {props.basketItems >= 0 && 
            <Row style={{marginRight: '20px'}}>
                <ShoppingCartOutlined onClick={props.showDrawer} style={{ fontSize: '26px'}} />
                <p>{props.basketItems}</p>
            </Row>}
        </Row>
    )
}
export default Header
