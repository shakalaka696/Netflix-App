import { createBrowserRouter } from "react-router";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router";
import { useDispatch } from "react-redux";



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
 
  
  
  return <div>
    <RouterProvider router={appRouter}></RouterProvider>
  </div>
}

export default Body;