import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser,addUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";


const Header = ()=>{

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }
  useEffect(()=>{
    // To get the current user is by setting an observer on the Auth object
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
   const {uid,email,displayName,photoURL} = user;
   dispatch(addUser({uid : uid,email : email,displayName:displayName,photoURL:photoURL}));
   navigate("/browse");
  } else {
     dispatch(removeUser());
     navigate("/");
  }
      });

      return ()=> unsubscribe();
   },[]);
 
  return (<div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between">
    <img className="w-44 " src= {LOGO_URL} alt="Logo"/>

    {user && (<div className="flex p-2">
      <img className="w-12 h-12 m-4" src= {user?.photoURL} alt="img"/>
      <button className="text-white m-1" onClick={handleSignOut}>(Signout)</button>
    </div>)}
  </div>

  
  
      );

}

export default Header;

