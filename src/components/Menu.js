import { useNavigate, Link } from "react-router-dom"
const Menu = () => {
    let navigate = useNavigate()
    return(
        <nav>
            <button onClick={() => navigate('/quiz')}>Quiz app</button>
            <button onClick={() => navigate('/contact')}>Contact app</button>
            <button onClick={() => navigate('/slider')}>Slider</button>
            {/* <br/>
            <Link to="/quiz">link Quiz</Link>
            <Link to="/quiz">link Contact</Link>
            <Link to="/slider">link Slider</Link> */}
        </nav>
    )
}
export default Menu
