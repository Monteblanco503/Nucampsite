import React from "react";
import SubHeader from "../components/SubHeader";

import { Container, Row } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Row>
               <DisplayList /> 
            </Row>
            
        </Container>
    );
};

export default HomePage;