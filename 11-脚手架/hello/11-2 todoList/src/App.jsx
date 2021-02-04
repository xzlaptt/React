//创建外壳组件APP
import React,{Component} from 'react'
import './App.css'
import Footer from './component/footer/footer'
import Header from './component/header/header'
import List from './component/list/list'

class App extends Component{

    state={todos:[
        {id:1,name:"吃饭",done:true},
        {id:2,name:"睡觉",done:false},
        {id:3,name:"打代码",done:true},
    ]}


    //添加相应的事情
    code = (value)=>{
        //如果想要子组件中的值传递给父组件，就可以给子组件一个函数，子组件在调用函数的时候，将值作为参数传递过去
        
        const {todos} = this.state;
        let p = {id:(todos.length+1),name:value,done:false}
        this.setState({todos:[p,...todos]});
    }
    

    //根据id,修改状态中是否被选中
    checked = (id,checked) =>{
        const {todos} = this.state;
        // todos.map((todo)=>{
        //     if(todo.id == id){
        //         todo.done = checked;
        //     }
        //     return null;
        // })
        // this.setState({todos:[...todos]})
        const newTodo =  todos.map((todo)=>{
            if(todo.id === id){
                return {...todo,done:checked};
            }
            return todo;
        })
        this.setState({todos:newTodo})

    }

    //点击删除按钮，删除其中一行
    deleteById =(id)=>{
        const {todos} = this.state;
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        const newTo = todos.filter((todo)=>{
            return todo.id !== id
        })
        this.setState({todos:newTo})
    }

    //全选
    choseAll = (done)=> {
        const {todos} = this.state
        
        const newTo = todos.map((todo)=>{
            return {...todo,done};
        })
        this.setState({todos:[...newTo]})
    }


    //删除选中的内容
    Alldelete = () =>{
        const {todos} = this.state;
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        const newTo = todos.filter((todo)=>{
            return todo.done !== true
        })
        this.setState({todos:newTo})
    }


    render(){
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header code = {this.code} />
                    {/*注意：传递参数的属性名称不能是关键字，比如delete*/}
                    <List todos = {this.state.todos} show = {this.checked} deleteById = {this.deleteById}/>
                    <Footer allCheck = {this.state} choseAll = {this.choseAll} Alldelete = {this.Alldelete} />
                </div>
                    
            </div>
        )
    }
}

export default App  