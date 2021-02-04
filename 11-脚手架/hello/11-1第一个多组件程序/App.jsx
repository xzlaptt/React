//创建外壳组件APP
import React,{Component} from 'react'
import Hello from './component/hello/hello'
import Welcom from './component/welcom/welcom'
class App extends Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcom />
            </div>
        )
    }
}

export default App