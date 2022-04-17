import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Expert = ({ expert }) => {
    console.log(expert)
    const { img, name, price, description } = expert;

    return (
        <CardGroup className='col-lg-4 col-md-6 mb-4'>
            <Card className="card h-100 p-2 rounded border-0 shadow-lg">
                <Card.Img variant="top" className='img-fluid d-block mx-auto rounded' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Price: {price}</p>
                        <p>{description}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Expert;