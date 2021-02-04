//引入核心库
import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
//引入组件
import App from './App.jsx'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById("root"))
