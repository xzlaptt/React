//创建外壳组件APP
import React,{Component} from 'react'
import axios from 'axios'
import './App.css'

class App extends Component{

    click = () =>{
        //3000-->到5000会有跨域问题 开启一个代理，解决跨域的问题
        //相当于在3000的机器上放置一个代理，发送一个请求之后，会先判断3000这个服务上是否有这个服务，如果有直接就返回，如果没有就去5000去找，
        //经过这个代理转发到5000这个机器上。
        axios.get('http://localhost:3000/students').then(
            result => {console.log("这个成功",result.data)},
            error => {console.log("失败",error)}
        )
    }

    render(){
        return (
            <div >
                <button onClick = {this.click}>点击我</button>
                    
            </div>
        )
    }
}

export default App  