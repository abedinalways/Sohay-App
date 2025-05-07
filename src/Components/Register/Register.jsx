import React, { use, useEffect, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../Firebase/Firebase.init';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const {createUser, user} = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/profile')
    }
  },[user, navigate])
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(name, email, password, photoURL, terms);
    setErrorMessage('');
    setSuccess(false);
    if (!terms) {
      setErrorMessage('please accept our terms & conditions');
      return;
    }
    // password verify
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (passwordRegex.test(password) === false) {
      setErrorMessage('Password must be at least 8 characters long, one lowercase/uppercase letter or one number and least one special character (like !@#$%)');
      return;
    }
    //create user
    createUser(email, password).then(result => {
      console.log(result)
      setSuccess(true)
      setErrorMessage('')
      // get user profile
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:photoURL,
      }).then(() => {
            console.log('Profile updated');
            navigate('/');
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
    })
      .catch(error => setErrorMessage(error.message))
    
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-6 mx-auto relative">
        <form
          onSubmit={handleRegister}
          className="fieldset bg-base-200 shadow-xl border-purple-200 rounded-box w-xs border p-4 mx-auto text-xs"
        >
          <div className="p-2 flex flex-col justify-center items-center">
            <BiUser className="h-8 w-8 text-purple-600 bg-white border-2 rounded-full" />
            <legend className="fieldset-legend text-2xl font-bold font-[sora] text-purple-600">
              Create Account
            </legend>
          </div>
          <label className="label font-semibold font-[Suse]">Name</label>
          <input
            required
            type="text"
            className="input"
            name="name"
            placeholder="Enter Your name"
          />
          <label className="label font-semibold font-[Suse]">Photo</label>
          <input
            type="text"
            className="input"
            name="photo"
            placeholder="Photo url"
          />

          <label className="label font-semibold font-[Suse]">Email</label>
          <input
            required
            type="email"
            className="input"
            name="email"
            placeholder="Enter Your Email"
          />
          <label className="label font-semibold font-[Suse]">Password</label>
          <input
            required
            type={showPassword ? 'text' : 'password'}
            className="input"
            name="password"
            placeholder="Enter your Password"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-ghost absolute md:top-85 md:left-194 top-85 left-77"
          >
            {showPassword ? <FaEyeSlash className='text-purple-800'></FaEyeSlash> : <FaEye className='text-purple-800'></FaEye>}
          </button>
          <button className="btn  bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-md text-xl hover:bg-purple-600 hover:text-white mt-2 mb-2">
            Signup
          </button>
          <label className="label mt-1 font-bold text-purple-500 font-[Poppins]">
            <input type="checkbox" className="checkbox" name="terms" />
            Accept Our Terms & Conditions
          </label>
          <p className='font-[Poppins]'>
            Already SingUp? Please{' '}
            <Link
              to="/login"
              className="font-[Poppins] font-bold text-blue-600 underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
      <div>
        {errorMessage && (
          <p className="text-red-600 font-bold flex justify-center">
            {' '}
            {errorMessage}{' '}
          </p>
        )}
        {success && (
          <p className="text-green-600 font-bold flex justify-center">
            user created account successfully
          </p>
        )}
      </div>
    </>
  );
};

export default Register;
