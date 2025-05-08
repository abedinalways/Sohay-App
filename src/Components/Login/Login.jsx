import React, { use, useRef} from 'react';
import { BiUser } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const Login = () => {
  const emailRef = useRef();
  const { signInUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password).then(result => {
      console.log(result);
      toast.success('Login Successfully')
      navigate('/bills')
    }).catch(error => {
      console.log(error.message);
      toast.error('write a wrong email/password')
    })
  }
  const handleForgotPassword = () => {
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email).then(() => {
      toast.success('we have send you a password reset email. Please check your email')
    }).catch(error => {
      toast.error(error.message)
    })
  }
  
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result);
        toast.success('Logged in with Google successfully!');
        navigate('/bills');
      })
      .catch(error => {
        console.error('Error signing in with Google:', error);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6 mx-auto bg-base-200">
      <Toaster/>
      <form onSubmit={handleLogin} className="fieldset bg-base-200 shadow-xl border-purple-200 rounded-box w-xs border p-4 mx-auto">
        <div className="p-2 flex flex-col justify-center items-center">
          <BiUser className="h-8 w-8 text-purple-600 bg-white border-2 rounded-full" />
          <legend className="fieldset-legend text-2xl font-bold font-[sora] text-purple-600">
            Welcome Back!
          </legend>
        </div>

        <label className="label font-semibold font-[Suse]">Email</label>
        <input type="email" className="input" name='email' ref={emailRef} placeholder="Enter Your Email" />
        <label className="label font-semibold font-[Suse]">Password</label>
        <input
          type="password"
          name='password'
          className="input"
          
          placeholder="Enter your Password"/>
        <div onClick={handleForgotPassword} className="text-purple-600 underline font-bold cursor-pointer">
          Forgot password?
        </div>
        <button className='btn  bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-md text-xl hover:bg-purple-600 hover:text-white mt-2 mb-2'>Login</button>
        <div className="divider text-purple-600">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn border border-purple-400 flex items-center text-purple-600 hover:text-white hover:bg-purple-600"
        >
          <FcGoogle className="mr-2" size='24px' /> Sign in with Google
        </button>
        <p>
          Don't have an account? Please{' '}
          <Link to="/register" className="font-[Poppins] font-bold text-purple-600 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
