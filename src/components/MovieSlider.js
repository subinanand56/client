import React from "react";
import Card from "./Card";
import styled from 'styled-components'

const MovieSlider = ({data,title}) => {
  return (
    <Container>
        <h1>{title}</h1>
        <div className="wrapper">
        <div className="slider">
        {
        data.map((movie, index)=>{
            return <Card movieData={movie} index={index} key={movie.id} />
        })
      }
    </div>
        </div>
       
    </Container>
    
  );
};
const Container=styled.div`
gap: 0.7rem;
position: relative;
padding: 1rem 0;
h1{
    margin-left: 6px;
    font-size: 25px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
}
.wrapper{
    .slider{
        display: flex;
        width: min-content;
        gap: 0.6rem;
        transform: translateX(0px);
        transition: 1s ease-in-out;
        margin-left: 6px;
    }
}
`
export default MovieSlider;
