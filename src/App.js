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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      pickupSaving: -12.21,
      taxes: 0,
      estimatedTotal: 0
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
          <PromoCodeDiscount />
        </Grid>
      </div>
    );
  }
}

export default App;
