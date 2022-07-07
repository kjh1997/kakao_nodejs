import React from 'react';
import "./Home.scss"
import { Button, Card, Tabs, Tab } from 'react-bootstrap';
const Home = () => {
    
    return (
        <>

        <div className='home'>
            <div className="left">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
                adsfadsfadsfafd
            </Tab>
            <Tab eventKey="profile" title="Profile">
                fadsfasdfdsafasdf
            </Tab>
            <Tab eventKey="contact" title="Contact">
                fdsafsafsadfsad
            </Tab>
            </Tabs>








            </div>
            <div className="right">
            <Card style={{ width: '95%', margin:'10px', height:'220px'}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>    
            </Card>
            <Card style={{ width: '95%', margin:'10px', height:'220px' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>    
            </Card>
            <Card style={{ width: '95%', margin:'10px', height:'220px' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>    
            </Card>
            </div>
        </div>
        </>
    )
}

export default Home;