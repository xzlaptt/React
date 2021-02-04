import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {

    state = {mouse:false}

    //鼠标移入移出的回调
    handleMouse = (flag) =>{
        return () =>{
          this.setState({mouse:flag});  
        }
    }
    //勾选以及取消勾选的id
    show =(id)=>{
        return (event)=>{
            this.props.createCheck(id,event.target.checked);
        }
    }

    //删除按钮
    handleDelete = (id) => {
        return () =>{
            // confirm()方法用于显示一个带有指定消息和确认及取消按钮的对话框。
            // 如果访问者点击"确定"，此方法返回true，否则返回false。
            // 如果直接使用confrim会提示错误，因此使用window.confrim
            if(window.confirm('确认删除吗？')){
                this.props.deleteById(id);
            }
        }
    }

    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state;

        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.show(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
