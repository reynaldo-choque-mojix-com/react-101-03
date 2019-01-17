import React, {Component} from 'react';
import {
    Button,
    Collapse,
    Well,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Row,
    Col
} from 'react-bootstrap';

class PromoCodeDiscount extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            value: ''
        }
    }

    handlerDiscountButton = (e) => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return(
            <div>
                <Button
                    className="promo-code-button"
                    bsStyle="link"
                    onClick={this.handlerDiscountButton}
                >
                    {this.state.open === false ? `Apply `:`Hide `} promo code 
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
            </div>
        );
    }
}
export default PromoCodeDiscount;