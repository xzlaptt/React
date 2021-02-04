import React, { Component } from 'react'
import Message from './message/message'
import News from './news/news';
import MyNavLink from '../../components/MyNavLink/myNavLink'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                    <li>
                        {/* react中路由的注册是有顺序的，因此在匹配的时候也是按照这个顺序进行的，因此会先匹配父组件中的路由 */}
                        <MyNavLink to = "/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink  to = "/home/message">Message</MyNavLink>
                    </li>
                    </ul>
                    <Switch>
                        <Route path = "/home/news" component={News} />
                        <Route path = "/home/message" component={Message} />
                        <Redirect to="/home/message"/>
                    </Switch>
              </div>
            </div>
        )
    }
}
