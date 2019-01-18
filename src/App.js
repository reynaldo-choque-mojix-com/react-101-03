import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'
import './App.css';

//components
import Subtotal from './components/subtotal/Subtotal';
import PickupSavings from './components/pickup_saving/PickupSavings';
import TaxesFees from './components/taxes_fees/TaxesFees';
import EstimatedTotal from './components/estimated_total/EstimatedTotal';
import ItemDetails from './components/item_details/ItemDetails';
import PromoCodeDiscount from './components/promo_code/PromoCode';

//redux
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 300,
      pickupSaving: -12.21,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }
  }

  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSaving) * 0.13
      },
      function() {
        this.setState({
          estimatedTotal: this.state.total + this.state.pickupSaving + this.state.taxes
        })
      }
    )
  }

  giveDiscount = () => {
    console.log('hola', this.props);
    if( this.props.promoCode === 'DISCOUNT') {
      console.log("you have a discount");
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card" >
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.pickupSaving.toFixed(2)} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <PromoCodeDiscount 
            isDisabled={this.state.disablePromoButton}
            applyDiscount={this.giveDiscount}  
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(App);
