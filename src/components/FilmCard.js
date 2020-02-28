import React from 'react';
import { Link } from 'react-router-dom'

const FilmCard = (props) => {
  const reviewID = props.review

  return (
    <div>
      <img alt='movie poster' src={props.img} />
        <h4>{props.title}</h4>
        <p>{props.year}</p>
        <Link activeStyle={{fontWeight: "bold",color: "red"}} exact to={`/movie/${reviewID}`}> Click for more</Link>
    </div>
  )
}

export default FilmCard