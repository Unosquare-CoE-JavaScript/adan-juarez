import { connect } from 'react-redux'
import React from 'react'
import NewItemForm from '../components/connectAPI/NewItemForm'
import { addNewItem } from '../state/items/action'
import { bindActionCreators } from 'redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        //pass this as a props
        onsubmit: (name, price) => dispatch(addNewItem(name, price))
    },
    dispatch
    )
}

export const NewItemFormContainer = connect(
    null, mapDispatchToProps
)(NewItemForm)
