import React, {Component} from "react"
import {Button} from "react-bootstrap";
class EventListener extends Component {
    render(){
        console.log("testtestestse")
        return (
            <>
            <Button>{this.props.text}</Button>
            </>
        )
    }      
    
}

class Controller extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            mode:'test'
        }
        console.log(this.state)
    }
    test() {
        return (<EventListener text={this.state.mode}></EventListener>)
    }
    setCreate() { 
        this.setState({mode: "create"});
    }
    setUpdate() { 
        this.setState({mode: "update"});
    }
    setDelete() { 
        this.setState({mode: "delete"});
    }

    render(){
        return(
            <>
            <h1>tefasfbsbabfst</h1>
            {this.state.mode}
            <li><a href="/create" onClick={function(e)
            {
                console.log("create click")
                this.setState({mode:"createsaetdafs"})
            }.bind(this)
            } id="create">create</a></li>
            <li><a href="/update" onClick={this.setUpdate()} id="update">update</a></li>
            <li><a href="/delete" onClick={this.setDelete()} id="delete">delete</a></li>
            <h1>{this.state.mode}</h1>
            </>
        )
    }
}


export default Controller