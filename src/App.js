import Header from "./Components/Headrer/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import {createBrowserRouter , RouterProvider} from"react-router-dom"
import Layout from "./Pages/layout/Layout";
import Watch from "./Pages/Watch/Watch";
import ShortsVideos from "./Pages/ShortsVideos/ShortsVideos"



const router=createBrowserRouter([{
  path:'', element:<Layout /> , children:[
    {path:'/' , element:<Home />} ,
    {path:'/watch' , element:<Watch />} ,
    {path : '/shorts' , element: <ShortsVideos />}

  
  ]
}])

function App() {
  return (
    <>
    
<RouterProvider router={router}></RouterProvider>
 </>
  );
}

export default App;
