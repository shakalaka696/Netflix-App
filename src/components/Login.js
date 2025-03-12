import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { photoURL} from "../utils/constants";



const Login = ()=>{
  const [isSignInForm,setIsSignInForm]= useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch =useDispatch();

  const name =useRef(null)
  const email =useRef(null);
  const password =useRef(null);
  
  const handleButtonClick = ()=>{
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;

    // Sign In and Sign Up Logic
    if(!isSignInForm){
    // Sign Up 
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: photoURL
        }).then(() => {
          // Profile updated!
          // The below information we copy pasted to geth the updated values i.e auth.currentUser and not only user 
            const {uid,email,displayName,photoURL} = auth.currentUser; 
            dispatch(addUser({uid : uid,email : email,displayName:displayName,photoURL:photoURL}));
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message);
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-"+ errorMessage);
        // ..
      });

    }
    else{
    // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });

    }

  }

  const toggleSignUpForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  
 
  return (<div>
    <Header></Header>
    <div className="absolute w-full h-full">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg" alt="background-img" />
    </div>
    {
    <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>

      {!isSignInForm &&
      <input type="name" placeholder="Enter Full Name " className="p-4 my-4 w-full bg-gray-700" ref={name}></input>}

      <input type="name" placeholder="Enter Email " className="p-4 my-4 w-full bg-gray-700" ref={email}></input>
      <input type="password" placeholder="Enter Password " className="p-4 my-4 w-full bg-gray-700" ref={password}></input>
      <p className="font-bold text-lg text-red-500"> {errorMessage}</p>
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
      <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>{isSignInForm ? "New to Netfilx?Sign up now.":"Already registered? Sign in now"}</p>
    </form>
    }
  </div>);

}

export default Login;

