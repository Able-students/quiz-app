import axios from "axios"
import { useEffect, useState } from "react"

function MovieDeatils(){
    let searchParams = new URL(window.location.href).searchParams
    const id = searchParams.get('mid')
    const [movie,setMovie] = useState({})
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2bc06158cec438c68a78d1754264f9f4&language=en-US&page=1`)
        .then(res => {
            setMovie(res.data)
        })
    },[])
return(
    <div>
        <h1>{movie?.title}</h1>
        <p>{movie?.overview}</p>
        <h3>{movie.popularity}</h3>
    </div>
)
}

export default MovieDeatils