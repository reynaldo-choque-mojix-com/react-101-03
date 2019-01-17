import React, { Component } from 'react';
import { Row, Col, Button, Collapse, Well, Media } from 'react-bootstrap';
import './ItemDetails.css';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    
    buttonHandler = (e) => {
        console.log(e);
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return(
            <div>
                <Button
                    className="items-details-button"
                    bsStyle= "link"
                    onClick={this.buttonHandler}
                >
                { this.state.open === false ? `See ` : `Hide ` } item details
                { this.state.open === false ? `+` : `-` }
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img 
                                        width={100}
                                        height={100}
                                        alt="thumbnail"
                                        src="https://raw.githubusercontent.com/reynaldo-choque-mojix-com/react-101-01/development/images/zapdos.jpg"
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <p> Zapdos </p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong> {`$${this.props.price}`} </strong>
                                            <br />
                                            <strong className="price-strike"> {`$${this.props.price}`} </strong>
                                        </Col>
                                        <Col md={6}>
                                            Qty: 1
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}