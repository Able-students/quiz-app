import { useNavigate, Link } from "react-router-dom"
const Menu = () => {
    let navigate = useNavigate()
    return(
        <nav>
            <button onClick={() => navigate('/quiz')}>Quiz app</button>
            <button onClick={() => navigate('/contact')}>Contact app</button>
            <br/>
            <Link to="/quiz">link Quiz</Link>
            <br/>
            <Link to="/contact">link Contact</Link>
        </nav>
    )
}
export default Menu