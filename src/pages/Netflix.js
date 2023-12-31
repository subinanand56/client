import React from 'react'
import { useState , useEffect } from 'react'
import TopNav from '../components/TopNav'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import{useDispatch , useSelector} from 'react-redux'
import { AiOutlineAlipayCircle  } from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
import Card from '../components/Card'
import { fetchMovies, getGenres } from '../store'
import SliderContainer from '../components/SliderContainer'


const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  const navigate = useNavigate()

  const movies =useSelector((state)=> state.netflix.movies)
  const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

  const dispatch =useDispatch()

  useEffect(()=> {
    dispatch(getGenres())
  },[]);

  useEffect(()=> {
    if(generesLoaded){
      dispatch(fetchMovies({type:"all"}))
    }
  });
    
  window.onscroll =() =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true )
    return () => (window.onscroll = null)
  }
 
  // console.log(movies);

  return (
    <HeroContainer>
      <div className='hero'>
      <TopNav isScrolled={isScrolled} />
      <img className='background-image' src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b' alt='hero image' />
      <div className='container'>
        <div className='title'> 
        <h1>Spiderman -No <br/>Way Home</h1>
        <p>When his loved ones are put at risk, Peter Parker asks Doctor Strange to restore his secret — and accidentally sets off a disaster of epic proportions.</p>
        </div>
        <div className='buttons'>
          <button onClick={()=>navigate('/player')} className='playbtn'>Play</button>
          <button className='morebtn'>More</button>
        </div>
      </div>
    </div>
    <SliderContainer movies={movies}/>
    </HeroContainer>
    
    
  )
}

const HeroContainer =styled.div`
background-color: black;
.hero{
  position: relative;
  .background-image{
    filter: brightness(40%);
  }
  img{
    height: 85vh;
    width: 100%;
  }
  .container{
    position: absolute;
    bottom: 1rem;
    .title{
      h1{
        margin-left: 3rem;
        font-size: 60px;
        background: -webkit-linear-gradient(#FFFFFF,rgb(255,255,255 ));
        -webkit-background-clip:text;
        -webkit-text-fill-color: transparent;
      }
      p{
        margin-bottom: -50px;
        width: 640px;
        margin-left: 3rem;
        font-family: "lexend Deca", sans-serif;
        color: white;
      }
    }
    .buttons{
      display: flex;
      margin: 5rem;
      gap: 2rem;
    }
    .playbtn{
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;

    }
    .morebtn{
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      border-radius: 0.1rem solid white;
      cursor: pointer;
    }
  }
}


`
export default Netflix