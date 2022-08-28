import React,{useState} from 'react'
import "./SignUpScreen.css"
import HomeScreen from "./HomeScreen.js"

let hscreen;

function SignUpScreen() {
  const [screen,setScreen]=useState(false);
 

  const register=(e)=>{
      hscreen=true;
      setScreen(true);
      e.preventDefault();
  }

  const signIn=(e)=>{
    hscreen=true;
    setScreen(true);
    e.preventDefault();
  };
  return (<>
  <div className='signupscreen'>
      
      <form action="">
       <h1>Sign In</h1>
       <input type="email" placeholder='Email'></input>
       <input type="password" placeholder='Password' />
       <button onClick={signIn}type='submit'>Sign In</button>
       <h4> <span className='signupscreen-gray'>New to Netflix? </span> <span className='signupscreen-link' onClick={register}> Sign Up now.</span></h4>
      </form>
      </div>

  </>
    
  
  )
}
export {hscreen};
export default SignUpScreen;