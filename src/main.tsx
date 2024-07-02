import React from 'react'
import ReactDOM from 'react-dom/client'
// 样式初始化 -- 最前面
import "reset-css"
//UI框架的样式

//全局样式
import '@/assets/styles/global.scss'
//项目的样式
//import Router from "./router"
import App from './App'

import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
