import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MoviesCard = ({movie}) => {
    const history = useHistory();
    const {id, name,image,language} = movie.show;

    const showSummary = id => {
          const url = `/shows/${id}`
          history.push(url)
    }    
    return (
        <div>
              <Col>
            <Card className="shadow mb-4" style={{ borderRadius: "20px", border: 0 }}>
                <div className="d-flex align-items-center p-2" style={{ maxwidth: "300px", height: "300px"}}>
                    <Card.Img
                        className="w-100"
                        style={{ objectFit: "contain", maxHeight: "300px" }}
                        variant="top"
                        src={image?.medium}
                    />
                </div>
                <Card.Body className="pb-0">
                    <Card.Title as={"h4"} >{name}</Card.Title>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Title
                        as={"h2"}
                        className="mb-1"
                        style={{ fontWeight: "600", color: "#FF4B2B"}}>
                        {language}
                    </Card.Title>
                    <Button
                        onClick={() => showSummary(id)}
                        className="buy-btn shadow-none">
                        summary
                    </Button>
                </Card.Body>
            </Card>
        </Col >
        </div>
    );
};

export default MoviesCard;