import React from 'react';

import {Row,Col,Card} from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import company_avatar from '../../images/company-1.png'
import company_avatar2 from '../../images/company-1.png'


const Home = ()=>(
    <Row>
        <Col m={3} s={12}>
        <UserProfile/>
        </Col>
        <Col m={8} s={12}>
            <Card>
                <h5 className="subtitle">About Me</h5>
                <div>
                    <p><b>Lorem</b></p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <br/>
                    <p><b>Ipsum</b></p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </Card>
            <h5 className="subtitle">Experience</h5>
            <Experience title="React Developer"
            company="Twitter"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
            avatar={company_avatar}
            />
            <Experience title="React Developer"
            company="Twitter"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
            avatar={company_avatar2}
            />

        </Col>        
    </Row>
)

export default Home;