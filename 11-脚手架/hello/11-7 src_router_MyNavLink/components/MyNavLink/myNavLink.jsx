import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class myNavLink extends Component {
    render() {
        return (
            // 通过{...对象}的形式解析对象，相当于将对象中的属性全部展开
            //<NavLink className="list-group-item" to = {this.props.to} children = {this.props.children}/>
            <NavLink className="list-group-item" {...this.props}/>
        )
    }
}
