import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';

export default class TaxesFees extends Component {
    render() {
        return(
            <Row className="show-grid">
                <Col md={6}> Taxes & fees (Bolivian Taxes is 13%) </Col>
                <Col md={6}> {`$${this.props.taxes}`} </Col>
            </Row>
        );
    }
}