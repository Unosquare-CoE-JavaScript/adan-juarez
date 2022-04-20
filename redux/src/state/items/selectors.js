import { createSelector } from 'reselect'

export const selectItem = (state, props) => {
    return state.item.find((item) => item.uuid === props.uuid)
}

export const selectItemTotal = createSelector(
    [selectItem], 
    item => item.price * item.quantity
)
//cheap computation to avoid running and running again
export const selectItems = state => state.selectItems
export const selectTipPercentage = state => state.tipPercentage

export const selectSubtotal = createSelector([selectItems], (items) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  });
  
  export const selectTipAmount = createSelector(
    [selectSubtotal, selectTipPercentage],
    (subtotal, tipPercentage) => {
      return subtotal * (tipPercentage / 100);
    }
  ); 
  // return the same result always
  export const selectTotal = createSelector(
    [selectSubtotal, selectTipAmount],
    (subtotal, tipAmount) => {
      return subtotal + tipAmount;
    }
  );