import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Make sure to create a corresponding CSS file for styling

const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
