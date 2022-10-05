import React from 'react'
import PropTypes from 'prop-types'
import '../../static/styles/modal.scss'

const Modal = ({ children, shown, close, title }) => {
  return shown ? (
    <div
      className="poke-card"
      onClick={() => { close(); }}
    >
        <div
          className="poke-card__content"
          onClick={e => { e.stopPropagation() }}
        >
          {children}
        </div>
        <div className="poke-card__btn--cont">
         <button className="poke-card__btn" onClick={close}>{title}</button>
        </div>
        </div>
  ) : null;
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  shown: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string.isRequired
}

export default Modal;
