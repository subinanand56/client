import React from 'react'
import { useState } from 'react'
import TopNav from '../components/TopNav'
import styled from 'styled-components'


const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll =() => {
      setIsScrolled(window.pageYOffset === 0 ? false: true)
      return () =>(window.onscroll = null)
  }
  console.log(isScrolled);
  return (
    <NetflixContainer>
    <div className='hero'>
      <TopNav isScrolled={isScrolled}/>
      <img src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b' alt='hero image' />
      <img src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b' alt='hero image' />
      <img src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b' alt='hero image' />
  
      <img src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRDQOzGC_rInp4gFvqFPDF3mcWchowjepe5uTldav_Sx1QgJlpJG-ATT_PcYJbF-y5AtlC9koSScBJPATb4JET65SrkrgOl92SGl.jpg?r=c9b' alt='hero image' />
    </div>
    </NetflixContainer>
  )
}
const NetflixContainer=styled.div`
.hero{
  img{
    width:100%;
  }
}`
export default Netflix