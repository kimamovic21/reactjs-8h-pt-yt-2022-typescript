import React from 'react';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result);
    navigate('/');
  };

  return (
    <div className='login'>

        <p>Sign In With Google to Continue</p>
        <div className='google-btn'>
            <GoogleButton 
                onClick={signInWithGoogle} 
                label='Sign in with Google'
            />  
        </div>

    </div>
  );
};

export default Login;
