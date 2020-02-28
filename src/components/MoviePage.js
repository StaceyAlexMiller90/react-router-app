import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const MoviePage = () => {
  const route_parameters = useParams();
  const imdbID = route_parameters.imdb_id

  const [movieData, set_movieData] = useState();

  useEffect(() => {
    async function fetchData() {

      const data = await axios.get(
        //My API Key: b1f83820
        `https://omdbapi.com/?apikey=b1f83820&i=${imdbID}`
      );
      set_movieData(data.data)
    }
    fetchData();
  }, [imdbID]);  

  return (
    movieData === undefined ? <h1>Loading...</h1> : 
          <div className='container'>
            <h1>{movieData.Title}</h1>
            <p>{movieData.Director}</p>
            <img alt ='movie poster'src={movieData.Poster} />
            <p></p>
          </div>
  )
}

export default MoviePage