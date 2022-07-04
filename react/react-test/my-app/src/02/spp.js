import React, {Component} from "react";
import BasicExample from '../component/nav'
import Footer from '../component/footer'
import Board from '../board/board'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class TestButton extends Component {
    render(){
        return (
            <>
            <h1>{this.props.test}</h1>
            </>
        )
    }
}

class SppTest extends Component {
    constructor(props){
        super(props)
        this.state = {
            mode:"init",
            test:"state.test"
        }
    }
    clickFunc(e){
        e.preventDefault()
        console.log(this.state.mode);
        if(this.state.mode === "click"){
            this.setState({mode:"click2"})
        } 
        else{
            this.setState({mode:"click"})
        }
    }

    render(){
        return (
            <>
            <button onClick={(e) => this.clickFunc(e)}>test</button>
            <label>{this.state.mode}</label><br></br>
            <label>{this.state.test}</label><br></br>
            <h1>test</h1>
            <TestButton test={this.state.mode}></TestButton>
            </>
        )
    }
}
function SppTest1 (){
    return(
        <>
        <BasicExample></BasicExample>
        <SppTest></SppTest>
        <Board></Board>
        <Footer></Footer>
        </>
    )
}

export default SppTest1;