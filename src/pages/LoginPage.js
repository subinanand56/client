import React from 'react'
import styled from 'styled-components'
import Backgroundimage from '../components/Backgroundimage'
import Header from '../components/Header'

const LoginPage = () => {
  return (
    <Wrapper>
      <Backgroundimage/>
      <div className='loginContent'>
        <Header/>
        <div className='form-wrapper'>
        <div className='form'>
          <div className='title'>
            <h>Login</h>
          </div>
          <div className='container'>
            <input type='text' placeholder='email' />
            <input type='password' placeholder='password' />
            <button>Login</button>
          </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .loginContent{
    position: absolute;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0,0.79);
   height: 100vh;
   width: 100vw;
   grid-template-columns: 15vh 85vh;
    .form-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      height: 85vh;
    }
    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background-color:#000000b0;
      height: 70vh;
      padding: 2rem;
      color: white;
      border-radius: 0.4rem;

      .container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        input{
          border-radius: 0.4rem;
          padding: 0.5rem 1rem;
          width: 25rem;
          height: 3.4rem;
          outline: none;
        }
        button{
          padding: 0.5rem;
          background-color: red;
          border: none;
          cursor: pointer;
          border-radius: 0.4rem;
          height: 3.4rem;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
    
  }
`
export default LoginPage