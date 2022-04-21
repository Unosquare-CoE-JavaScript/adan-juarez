import { connect } from 'react-redux';
import TipSelect from '../components/connectAPI/TipSelect';
import { addNewItem } from '../state/items/action';

const mapStateToProps = (state) => {
  return {
    tipPercentage: state.tipPercentage
  };
};

const mapDispatchToProps = {
    addNewItem
};
// take 4 args: 
// mapStateToProps --> 
// mapDsipatchToProps --> 
export const TipSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipSelect);