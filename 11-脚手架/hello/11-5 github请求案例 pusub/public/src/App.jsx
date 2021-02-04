//创建外壳组件APP
import React,{Component} from 'react'
import Header from './header/header';
import List from './list/list'

class App extends Component{
    
    state = {
        Git:[],
        isFrist:true,
        isLoad:false,
        isError:''
    }

    // gitHub = (value) =>{
    //     this.setState({Git:value}) 
    // }

    updateAppState = (stateObj) =>{
        this.setState(stateObj) 
    }
    
    render(){
        //通过 ...将状态中的全部赋值过去
        return ( 
            <div className="container">
                <Header updateAppState = {this.updateAppState} />
                
                <List {...this.state} />
            </div>    
            
        )
    }
}

export default App  