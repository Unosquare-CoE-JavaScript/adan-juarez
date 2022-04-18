import { connect } from "react-redux"
import MenuItem from "../components/connectAPI/MenuItem"
import { removeItem, updatePrice, updateQuantity } from "../state/items/action"
import { selectItemTotal } from "../state/items/selectors"

const mapStateToProps = (state) => ({
    total: selectItemTotal(state, props)
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        remove: () => dispatch(removeItem(ownProps.uuid)),
        updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
        updateQuantity: (quantity) => dispatch(updateQuantity(ownProps.uuid, quantity))
    }
}

export const MenuItemContainer = connect(
    //null, 
    //runs if is only needed
    mapStateToProps,
    mapDispatchToProps
    )(MenuItem)
