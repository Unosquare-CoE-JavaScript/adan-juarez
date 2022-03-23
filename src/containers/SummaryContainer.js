import { connect } from "react-redux"
import { Summary } from "../components/connectAPI/Summary"
import { selectSubtotal, selectTipAmount } from "../state/items/selectors";

/* With selectors: This is for avoid time computation */
const mapStateToProps = (state) => {
    const subtotal = selectSubtotal(state);
    const tipAmount = selectTipAmount(state);
    const total = selectTipAmount(state);
  
    return {
      subtotal,
      tipAmount,
      total,
    };
  };
  
/* without selectors 
const mapStateToProps = state => {
    const items = state.items
    //let subtotal = 0
    for(const item of items) {
        subtotal += item.quantity * item.price
    }

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 
        0
    )

    const tipAmount = subtotal * (state.tipPercentage / 100)

    const total = subtotal + tipAmount

    return {
        subtotal,
        tipAmount,
        total
    }
} */

export const SummaryContainer = connect(mapStateToProps)(Summary)