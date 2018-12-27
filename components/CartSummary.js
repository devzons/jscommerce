import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

const stripeKey = 'pk_test_cIdxHadnM1Zl2aPhVrcrVrqn'

export default ({ 
  handleCheckout, 
  display_price: {with_tax: { amount, currency, formatted}}}) => (
  <React.Fragment>
    <Divider />

    <Segment clearing size='large'>
      <strong>Sub tital:</strong> {formatted}
      <StripeCheckout
        name="JS Commerce"
        amount={amount}
        currency={currency}
        stripeKey={stripeKey}
        shippingAddress={false}
        billingAddress={true}
        zipCode={true}
        token={handleCheckout}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
        <Button color="black" floated="right">
          Check out
        </Button>
      </StripeCheckout>
    </Segment>
  </React.Fragment>
)