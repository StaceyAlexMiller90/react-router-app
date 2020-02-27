import React, {useState} from 'react';
import axios from 'axios'
import FilmCard from '../components/FilmCard'

const DiscoverMobiesPage = () => {

  const [state, set_state] = useState("idle")
  const [searchText, set_searchText] = useState("");
  const [apidata, set_apidata] = useState([])

  const search = async () => {
    set_state("searching")
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);
    // Option B: use the `axios` library like we did on Tuesday
    const data = await axios.get(
      //My API Key: b1f83820
      `https://omdbapi.com/?apikey=b1f83820&s=${queryParam}`
    );
    set_state("done!")
    set_apidata(data.data.Search || 'no data')
    console.log(apidata)
  };
  
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <h3>Search Status: {state}</h3>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div className='mb-4 ml-3 mr-3 row'>
      {apidata === 'no data' ? <p>Sorry, no movies that match search</p>
                             : 
      apidata.map(movie => {
        return (
          <div className='col-lg-4 d-flex align-items-stretch mb-4'>
          <FilmCard
          title={movie.Title}
          year={movie.Year}
          img={movie.Poster}
          />
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default DiscoverMobiesPage