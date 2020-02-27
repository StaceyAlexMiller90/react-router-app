import React from 'react';
import Card from 'react-bootstrap/Card'

const FilmCard = (props) => {
  
  return (
    <div>
      <img src={props.img} />
        <h4>{props.title}</h4>
        <p>{props.year}</p>
    </div>
  )
}

export default FilmCard