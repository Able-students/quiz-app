import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Menu from './Menu';
import '../styles/slider.css'

function Slider(props){
    const [sliderList, setSliderList] = useState([])
    const [activeSlideIndex,setActiveSlideIndex] = useState(0)

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2bc06158cec438c68a78d1754264f9f4&language=en-US&page=1')
        .then(res => {
            setSliderList(res.data.results)
        })
    },[])
    
    function changeSlide(index,step=1){
        if(index > sliderList.length - 1){
            if(step === 2 && index > sliderList.length){
                setActiveSlideIndex(1)
            } else {
                setActiveSlideIndex(0)
            }
            return
        }
        if(index < 0){
            if(step === -2 && index < -1){
                setActiveSlideIndex(sliderList.length - 2)
            } else {
                setActiveSlideIndex(sliderList.length - 1)
            }
            return
        }
        setActiveSlideIndex(index)
    }
    let navigate = useNavigate()
    return(
        <>
            <Menu/>
            <div className="slider-container">
            <button onClick={() => changeSlide(activeSlideIndex-1)}>prev</button>
            {
            <div key={sliderList[activeSlideIndex]?.id} className='slider-item'>
                <div onClick={() => navigate('/movie?mid=' + sliderList[activeSlideIndex]?.id)}>
                    <h1>{activeSlideIndex} - {sliderList[activeSlideIndex]?.title}</h1>
                    <p>{sliderList[activeSlideIndex]?.overview}</p>
                    <img 
                    src={'https://image.tmdb.org/t/p/w500' + sliderList[activeSlideIndex]?.backdrop_path} 
                    alt={sliderList[activeSlideIndex]?.title} 
                    onError={(e) => {e.target.src='https://admin.itsnicethat.com/images/ladi0evZoRWdLE6iQuFstqGG_Fw=/51842/format-webp%7Cwidth-2880/5530f1de5c3e3c0370005fca.png'}}/>
                </div>
                <div className="slider-steps">
                    <span onClick={() => changeSlide(activeSlideIndex-2, -2)}></span>
                    <span onClick={() => changeSlide(activeSlideIndex-1)}></span>
                    <span className="active-step"></span>
                    <span onClick={() => changeSlide(activeSlideIndex+1)}></span>
                    <span onClick={() => changeSlide(activeSlideIndex+2, 2)}></span>
                </div>
            </div>
            }
            <button onClick={() => changeSlide(activeSlideIndex+1)}>next</button>
        </div>
        </>
    )
}

export default Slider


