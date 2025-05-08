import React, { use, useEffect, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../Firebase/Firebase.init';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';


const Register = () => {
  const { createUser, user, googleSignIn } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
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
    setPasswordError('');
    if (!terms) {
      toast.error('please accept our terms & conditions');
      return;
    }
    // password verify
    const validatePassword = password => {
      if (password.length < 6) {
        return 'Password must be at least 6 characters long.';
      }
      if (!/[a-z]/.test(password)) {
        return 'Password must contain at least one lowercase letter.';
      }
      if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter.';
      }
      return '';
    };
     
     const passwordValidationError = validatePassword(password);
     if (passwordValidationError) {
       setPasswordError(passwordValidationError);
       return;
     }

    //create user
    createUser(email, password).then(result => {
      console.log(result)

      // get user profile
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:photoURL,
      }).then(() => {
            toast.success('Registration successful!');
            navigate('/');
          })
          .catch((error) => {
            toast.error(error.message);
          });
    })
      .catch(error => toast.error(error.message))
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log('Logged in with Google:', result);
        toast.success('Logged in with Google!');
        navigate('/');
      })
      .catch(error => {
        console.error('Google sign-in error:', error.message);
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-6 mx-auto relative bg-base-200">
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
          <div className="relative">
            <input
              required
              type={showPassword ? 'text' : 'password'}
              className="input w-full pr-10"
              name="password"
              placeholder="Enter your Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center px-2 text-purple-800"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className="btn  bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-md text-xl hover:bg-purple-600 hover:text-white mt-2 mb-2">
            Signup
          </button>
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}
          <label className="label mt-1 font-bold text-purple-500 font-[Poppins]">
            <input type="checkbox" className="checkbox" name="terms" required />
            Accept Our Terms & Conditions
          </label>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline flex items-center"
          >
            <FcGoogle className="mr-2" /> Sign up with Google
          </button>

          <p className="mt-2 text-center font-[Poppins]">
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
    </>
  );
};

export default Register;
