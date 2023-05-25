import React from "react";

const Modal = ({ children, closeModal })=>{
        return (
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" onClick={closeModal}>Close</button>
                        </div>
                        <div className="modal-body">
                            <p>{children}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );   
}

export default Modal;
