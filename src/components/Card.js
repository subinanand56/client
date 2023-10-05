import React ,{useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {IoPlayCircleSharp} from 'react-icons/io5'
import { AiOutlinePlus } from 'react-icons/ai'
import {RiThumbUpFill,RiThumbDownFill} from 'react-icons/ri'
import {BiChevronDown} from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'


const Card = () => {

    const [onHovered, setonHovered] = useState(false)
    const navigate = useNavigate()


  return (
    
    <CardContainer onMouseEnter={()=>setonHovered(true)}
    onMouseLeave={()=>setonHovered(false)}>
        <img src='https://resize.indiatvnews.com/en/resize/newbucket/400_-/2022/01/the-batman-movie-1643275664.jpg' alt='movie poster' onClick={()=> navigate('/player')} />
        {
            onHovered &&(
                <div className='hover'>
                    <div className='image-video-wrapper'>
                    <img src='https://resize.indiatvnews.com/en/resize/newbucket/400_-/2022/01/the-batman-movie-1643275664.jpg' alt='movie poster' onClick={()=> navigate('/player')} />
                <video src='https://imdb-video.media-imdb.com/vi3348546073/1434659607842-pgv4ql-1651186731527.mp4?Expires=1696523437&Signature=mA6a8mE6OeI8Qbi8hFO2il-OMy1dyixGO~SJDKDm45IEPIc54oDh-rEzcwXfCOAos3PjlNHaSKMqTCdzyboY2r-5ZnaWHPW~Fs4vXH5vpdExAa7ZYwVsWYo~JRfdF0z3xR8fS0GwqJbvJa-5~Z6h9HSMR3uOkolxCchpCFzvzh-8cX3oBEx~0xfNE9pS2FLkJv8wBZO9xW0~S14Huh4rXUflyxAReMpMLsqcjQw5I~AochOgh6VxvjuYJ6~EmmMAFUtfQcSYL8dlarZnYzD2ID9qphGxbth7ftjKIgdtoVrZNT-iYpVaLvJRRefK5Cwsgy~8J7Za8toto4alJ9ibng__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA' 
        autoPlay loop controls  />
                    </div>
                    <div className='info-container'>
                        <h3 className='moviename' onClick={()=>navigate('/player')}>Batman</h3>
                        <div className='icons'>
                            <div className='controls'>
                                <IoPlayCircleSharp title='play' onClick={()=>navigate('/player')}/>
                                <RiThumbUpFill title='like'/>
                                <RiThumbDownFill title='Dis like'/>
                                <BsCheck title='Remove from list' />
                                <AiOutlinePlus title='Add to My List'/>
                            </div>
                            <div className='info'>
                                <BiChevronDown title='More Info'/>
                            </div>
                        </div>
                        <div className='genre'>
                            <ul>
                                <li>Action</li>
                                <li>Action</li>
                                <li>Action</li>
                                <li>Action</li>
                            </ul>
                        </div>
                    </div>
                </div>
                )
        }
    </CardContainer>
    
  )
}
const CardContainer=styled.div`
margin-top: 1rem;
max-width: 230px;
width: 230px;
height: 100%;
cursor: pointer;
position: relative;
background-color: red;
img{
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.hover{
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius:0.2rem;
    border-radius: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-out ;
    .image-video-wrapper{
        position: relative;
        height: 140px;
        img{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
        video{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
    }
    .info-container{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
        .moviename{
            color: white;
        }
    }
    .icons{
        display: flex;
        justify-content: space-between;
        .controls{
            display: flex;
            gap: 0.5rem;
        }

    
    svg{
        color: white;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
            color: #b8b8b8;
        }
    }
    }
    .genre{
        display: flex;
        color: white;
        ul{
            display: flex;
            gap: 1rem;
            li{
                padding: 0.rem;
                &:first-of-type{
                    list-style-type: none;
                }
            }
        }
    }
}

`
export default Card