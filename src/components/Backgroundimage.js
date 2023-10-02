import React from 'react'
import styled from 'styled-components'
const Backgroundimage = () => {
  return (
    <BackgroundContainer>
      <img src='https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png'  alt='no internet connection'/>
    </BackgroundContainer>
  )
}

const BackgroundContainer =styled.div`
      height: 100vh;
      width: 100vw;
      img{
        height:100vh;
        width:100vw;
      }
`


export default Backgroundimage