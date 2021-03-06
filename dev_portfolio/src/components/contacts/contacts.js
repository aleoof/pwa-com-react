import React from 'react';

import { Col, Row, Card, Input, Button } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'

const Contact = () =>(
    <Row>
        <Col m={3} s={12}>
        <UserProfile/>
        </Col>
        <Col m={8} s={12}>
            <Card>
                <Row>
                    <h5>Contact</h5>
                    <Input placehorder="email@email.com" type="email" label="Email" s={12}/>
                    <Input placeholder="Messagem..." label="Message" s={12} />
                    <Col s={12} m={12}>
                    <Button waves='light' className="rigth grey darken-2">SEND</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
)

export default Contact;