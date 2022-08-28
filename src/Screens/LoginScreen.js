import React,{useState} from 'react'
import "./LoginScreen.css"
import Test from "./Test.js";
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen'


function LoginScreen() {
    const [signIn,setSignIn]=useState(false);
    function update(){
        setSignIn(true);
    }
    
  return (
    <>{
       
   !signIn?
         <div className='loginScreen'>
    <div className="loginScreen-background">
    <img className="loginScreen-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='logo-image'></img>
    <button onClick={update} className='loginScreen-button'>Sign In</button>
    <div className="loginScreen-gradient"></div>
    </div>
    <div className="loginScreen-body">
            <h1>Unlimited films, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen-input">
                <form action="">
                    <input type="email" placeholder='Email Address'/>
                    <button onClick={update}className='loginScreen-getstarted'>GetStarted</button>
                </form>
            </div>
    </div>
    
      
    </div>:<HomeScreen/>
    
    
   
    }
    </>
   
  )
}

export default LoginScreen;