import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";


const Header = ()=>{

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
    
  }
 
  return (<div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between">
    <img className="w-44 " src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo"/>

    {user && (<div className="flex p-2">
      <img className="w-12 h-12" src= {user?.photoURL} alt="img"/>
      <button onClick={handleSignOut}>Signout</button>
    </div>)}
  </div>

  
  
      );

}

export default Header;

