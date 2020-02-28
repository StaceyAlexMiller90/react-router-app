import React, {useState, useEffect} from 'react';
import axios from 'axios'
import FilmCard from '../components/FilmCard'
import { useHistory, useParams } from 'react-router-dom'

const DiscoverMoviesPage = () => {

  const [state, set_state] = useState("idle")
  const [searchText, set_searchText] = useState("");
  const [apidata, set_apidata] = useState([])
  const params = useParams()
  const history = useHistory();

  // Triggered once each time the page renders for the first time, if there is a historical paramaeter to use
// render with this data, else, render with blank discover page

useEffect(() => {
  const NavigateBackToSearch = async () => {
    if(params.searchtext !== undefined) {
    const parameters = encodeURIComponent(params.searchtext)
        dataFetch(parameters)
      } else {
        set_apidata([])
      }} 
      NavigateBackToSearch()
   }, [params.searchtext])

  // Call to axios to grab data based on paramaters
  
  const dataFetch = async (parameters) => {
    const data = await axios.get(
      //My API Key: b1f83820
      `https://omdbapi.com/?apikey=b1f83820&s=${parameters}`
    )
    set_state("done!")
    set_apidata(data.data.Search || 'no data')
  }

  //Triggered when search button clicked to find new data

  const search = async () => {
    set_state("searching")
    const routeParam = encodeURIComponent(searchText);
    history.push(`${routeParam}`)
    dataFetch(routeParam)
  }   
  
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
          review={movie.imdbID}
          />
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default DiscoverMoviesPage