import App from "../App"
import Home from "../pages/Home"
import About from "../pages/About"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// 后面是 () 不是大括号[需要return] -- ()直接return了
const baseRouter = ()=> (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {/*注意 这里 配置了navigate to 使其访问/ 时，能够跳转到/home 这个地址*/}
                <Route path="/" element={<Navigate to='/home'/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter