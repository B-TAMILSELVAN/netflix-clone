import React,{useState} from 'react'
import "./SignUpScreen.css"
import "./LoginScreen.css"
import HomeScreen from './HomeScreen'

function Test() {
    const [hscreen,sethscreen]=useState(false);
    function updates(){
        sethscreen(true);
    }
  return (
    <>
    {!hscreen?
         <div className='loginScreen'>
    <div className="loginScreen-background">
    <img className="loginScreen-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='logo-image'></img>
    <button  onClick={updates}className='loginScreen-button'>Sign In</button>
    <div className="loginScreen-gradient"></div>
    </div>
    <div className="loginScreen-body">
    <div className='signupscreen'>
      
      <form action="">
       <h1>Sign In</h1>
       <input type="email" placeholder='Email'></input>
       <input type="password" placeholder='Password' />
       <button type='submit'>Sign In</button>
       <h4> <span className='signupscreen-gray'>New to Netflix? </span> <span className='signupscreen-link' onClick={updates} > Sign Up now.</span></h4>
      </form>
      </div>
    </div>
    </div>
    :
    <HomeScreen/>}

    </>
   
  )
}

export default Test