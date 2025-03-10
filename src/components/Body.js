import { createBrowserRouter } from "react-router";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router";
import { useEffect } from "react";
import {onAuthStateChanged,getAuth} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Body = ()=>{
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element:<Login> </Login>
    },
    {
      path : "/browse",
      element: <Browse></Browse>
    }

  ]);
  useEffect(()=>{
    const auth = getAuth();
    // To get the current user is by setting an observer on the Auth object
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid : uid,email : email,displayName:displayName,photoURL:photoURL}));
        } else {
        }
          });
      },[]);
  
  
  return <div>
    <RouterProvider router={appRouter}></RouterProvider>
  </div>
}

export default Body;