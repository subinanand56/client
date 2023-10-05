import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Player = () => {
  const navigate = useNavigate()
  return (
    <PlayerContainer>
      <div className='player'>
        <div className='backArrow'>
           <BsArrowLeft  onClick={()=>navigate(-1)} />
        </div>
        <video src='https://imdb-video.media-imdb.com/vi3348546073/1434659607842-pgv4ql-1651186731527.mp4?Expires=1696523437&Signature=mA6a8mE6OeI8Qbi8hFO2il-OMy1dyixGO~SJDKDm45IEPIc54oDh-rEzcwXfCOAos3PjlNHaSKMqTCdzyboY2r-5ZnaWHPW~Fs4vXH5vpdExAa7ZYwVsWYo~JRfdF0z3xR8fS0GwqJbvJa-5~Z6h9HSMR3uOkolxCchpCFzvzh-8cX3oBEx~0xfNE9pS2FLkJv8wBZO9xW0~S14Huh4rXUflyxAReMpMLsqcjQw5I~AochOgh6VxvjuYJ6~EmmMAFUtfQcSYL8dlarZnYzD2ID9qphGxbth7ftjKIgdtoVrZNT-iYpVaLvJRRefK5Cwsgy~8J7Za8toto4alJ9ibng__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA' 
        autoPlay loop controls />
      </div>

    </PlayerContainer>
  )
}


const PlayerContainer =styled.div`
.player{
  width: 100vw;
  height: 100vh;
  .backArrow{
    position: absolute;
    padding: 2rem;
    z-index: 1;
    svg{
      font-size: 3rem;
      cursor: pointer;
      color: white;
    }
  }
  video{
    height: 100%;
    width: 100%;
  }
}
`
export default Player