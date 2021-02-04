import React, { Component } from 'react';
import PubSub from 'pubsub-js'

import './list.css'
class List extends Component {

    state = {
        Git:[],
        isFrist:true,
        isLoad:false,
        isError:''
    }

    //在组件渲染之前订阅消息
    componentDidMount(){
        PubSub.subscribe("getSate",(_,data)=>{
            console.log(data)
            this.setState(data)
        })
    }

    render() {

        const {Git,isFrist,isLoad,isError} = this.state;
        return (
            <div className="row">
                {
                    //因为不能在JSX语法中使用if，只能是表达式，所以可以是有用三元运算符进行判断。
                    isFrist ? <h1>欢迎进入页面</h1> : 
                    isLoad ? <h2>正在搜索页面</h2> :
                    isError !== ''? <h1>{isError}</h1> :
                    //注意传递过来的一定是一个数组，不能是一个对象
                    //要不然初始化的时候对象就是 undefined 在遍历的时候就会出错
                    Git.map((git)=>{
                    return (
                        <div className="card" key = {git.id}>
                            <a href={git.html_url} target="_blank" rel="noreferrer">
                            <img alt="headImg" src={git.avatar_url} style={{width:'100px'}}/>
                            </a>
                            <p className="card-text">{git.login}</p>
                        </div>
                        )
                    })
                }
                
                
            </div>
        );
    }
}

export default List;