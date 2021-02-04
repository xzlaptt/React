//创建外壳组件APP
import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import About from './components/about/about'
import Home from './pages/home/home'
import Header from './pages/header/header'
import MyNavLink from './components/MyNavLink/myNavLink';

class App extends Component{
    
    render(){
        //通过 ...将状态中的全部赋值过去
        return ( 
            <div>
                <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <Header />
                </div>
                </div>
                <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                    {/* <a className="list-group-item active" href="./about.html">About</a>
                    <a className="list-group-item" href="./home.html">Home</a> */}
                    {/* RouteBrowserRouterr:就是利用H5推出的history身上的API
                        HashRouter:就是利用#,也就是锚点 hash值
                    */}

                    {/*NavLink在点击的时候就会去找activeClassName="ss"所指定的class的值，如果不添加默认是active
                        这是因为Link相当于是把标签写死了，不能去改变什么。
                    */}
                    {/* <NavLink  className="list-group-item"  to="/about">About</NavLink>
                    <NavLink className="list-group-item"  to="/home">Home</NavLink> */}

                    {/*将NavLink进行封装，成为MyNavLink,通过props进行传参数，标签体内容是props特殊的一个属性，叫做children */}
                        <MyNavLink to = "/about" >About</MyNavLink>
                        <MyNavLink to = "/home" >Home</MyNavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                       {/* 注册路由，也就是写对应的关系 */}
                       {/* 路由可以匹配多个路径,因此可以展示多个组件，但是按道理应该只匹配一个即可，而且多个匹配会很耗费性能
                       Switch:就可以保证路由在匹配到第一个路径之后，就不和继续向下走。 */}
                        <Switch>
                            <Route path="/about"component={About}/>
                            {/* exact={true}：开启严格匹配的模式，路径必须一致 */}
                            <Route   path="/home" component={Home}/>
                            {/* Redirect:如果上面的都没有匹配到，就匹配到这个路径下面 */}
                            <Redirect  to = "/home"/>
                        </Switch>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
        )
    }
}

export default App  