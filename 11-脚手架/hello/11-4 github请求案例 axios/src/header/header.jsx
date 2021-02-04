import React, { Component } from 'react'
import axios from 'axios';
export default class Header extends Component {

    search = () =>{
        //const {value} = this.KeyValue;
        //连续解构赋值，拿到this下面的KeyValue中的value,并进行重命名为KeyWord
        const {KeyValue:{value:keyWord}} = this;

        //在搜索之前设置,搜索的开始，结束第一次展示
        this.props.updateAppState({isFrist:false,isLoad:true})

        //切记在配置代理了之后一定需要添加相应的路径
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            success => {
                this.props.updateAppState({Git:success.data.items,isLoad:false});
            },
            error =>    {
                this.props.updateAppState({isError:error.message,isLoad:false});
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
                    <input ref={ c => this.KeyValue = c} type="text" placeholder="输入关键词进行搜索"/>&nbsp;
                    <button onClick = {this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
