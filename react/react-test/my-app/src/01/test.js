import React, {Component} from "react";
// import logo form
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

import BasicExample from '../component/nav';
class Math extends Component{
    render(){
        return(
            <h1>Math Math Math </h1>
        )
    }
}

class Subject extends Component {
    render(){
        return (
            <header>
                <h1>WEB</h1>
                world wide web!
                <Button>Boot strap</Button>
            </header>
        );
    };
}
class Tag extends Component{
    render(){
        var data = this.props.data
        var i = 0
        var lists=[]
        console.log(data.length)
        while(i < data.length) {
            lists.push(<>
            <tr><td>{data[i].test1}</td>
            <td>{data[i].test2}</td>
            <td>{data[i].test3}</td>
            </tr>
            </>)
            i+=1
        }
        return (
            <>
            <table>
                
                    {lists}
                
            </table>
            
           
            </>

        )
    }
}

function Test(){
    var data = [
        {test1:"test1",test2:"test2",test3:"test3"},
        {test1:"test4",test2:"test5",test3:"test6"},
        {test1:"test7",test2:"test8",test3:"test9"}
    ]
    return (
        <>
        <BasicExample></BasicExample>
        <Tag data={data}></Tag>
        <Math></Math>
        <Subject></Subject>
                hello, react!
       
        </>
    );
    
}

export default Test;

