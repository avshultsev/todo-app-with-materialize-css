import React from 'react'
import './ModalMessage.css'

let ModalMessage = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='modal-body'>
                <span>All todos completed!</span>
                <button onClick={() => closeModal()}>&times;</button>
            </div>
        </div>
    )
}

export default ModalMessage