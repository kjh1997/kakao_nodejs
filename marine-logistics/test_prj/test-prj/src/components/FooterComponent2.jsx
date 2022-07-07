import React, {Component} from 'react';
import {Row, Col} from "reactstrap";

class FooterComponent2 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    Year = () => {
        const year = new Date().getFullYear();
        return year
    };

    render() {
        return (
        <>
        <div style={{position:'fixed',bottom:'0', width:'100%', display: "flex",  justifyContent: "center"}}>
                <Row>
                    <Col>
                        <p> Copyright &copy; <span>{this.Year()}</span> </p>
                    </Col>
                </Row>
        </div> 
        </>
        );
    }
}

export default FooterComponent2;