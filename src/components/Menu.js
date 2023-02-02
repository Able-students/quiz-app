import { useNavigate } from "react-router-dom"

const Menu = () => {
    let navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate('/quiz')}>Quiz app</button>
            <button onClick={() => navigate('/contact')}>Contact app</button>
            <button onClick={() => navigate('/slider')}>Slider</button>
            <button onClick={() => navigate('/counter')}>Counter App</button>
            <button onClick={() => navigate('/form')}>Login</button>
            <button onClick={() => navigate('/accordion')}>Accordion menu</button>
            <button onClick={() => navigate('/shop')}>Shop</button>
        </div>
    )
}
export default Menu
