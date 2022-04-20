import { connect } from "react-redux"
import { MenuItems } from "../components/connectAPI/MenuItems"

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems)