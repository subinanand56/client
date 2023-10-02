import React ,{useState} from 'react'
import Header from '../components/Header'
import Backgroundimage from '../components/Backgroundimage'
import styled from 'styled-components'

const SignUpPage = () => {
  return (
    <Container>
      <Backgroundimage/>
      <div className='content'>
    <Header login />
    <div className='body'>
      <div className='text'>
        <h1>Unlimeted movies, Tv shows and more</h1>
        <h4>Watch anyhere, Cancel Anytime</h4>
        <h6>Ready to watch?  enter  your email to create or restart membership</h6>
      </div>
      <div className='form'>
        <input type='password' placeholder='password' name='password' />
        <input type='email' placeholder='mail address' name='email' />
        <button>Get Started</button>
        <button>Sign Up</button>

      </div>

    </div>
      </div>
    </Container>
  )
}

const Container =styled.div`

`

export default SignUpPage