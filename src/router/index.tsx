import React,{lazy} from 'react'
import Home from "../pages/Home"
import Login from "../pages/Login"
import {Navigate} from 'react-router-dom'

// 懒加载需要 loading 组件
//<React.Suspense fallback={<div>loading ... </div>}>
//<About/>
//</React.Suspense>

const About = lazy(()=>import("../pages/About"))
const Page1 = lazy(()=>import("@/pages/page1"))
const Page2 = lazy(()=>import("@/pages/page2"))
const Page3 = lazy(()=>import("@/pages/page3"))


const withLoadingComponent =(comp:JSX.Element)=>{
    return(
        <React.Suspense fallback={<div>loading ... </div>}>
            {comp}
        </React.Suspense>
    )
}

const routes =[
    {
        path:"/",
        element:<Navigate to="/home"/>
    },
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:"/User/1",
                element: withLoadingComponent(<Page1/>)
            },
            {
                path:"/User/2",
                element:withLoadingComponent(<Page2/>)
            },
            {
                path:"/Action/3",
                element:withLoadingComponent(<Page3/>)
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path: "/about",
        element: withLoadingComponent(<About/>)
    },
    {
        path: "*",
        element: <Navigate to="/home"/>
    }
]

export default routes
