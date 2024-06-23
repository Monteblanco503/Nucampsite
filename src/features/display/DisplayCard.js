import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    if (!item) {
        return null; // Render nothing if item is undefined or null
    }

    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;
