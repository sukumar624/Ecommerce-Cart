import { createPortal } from 'react-dom';
import styles from './Modal.module.css'
import { useEffect } from 'react';
const Modal = ({ children, handleClose }) => {

    return (
        createPortal(<>
            <div className={styles.backDrop} onClick={handleClose}></div>
            <div className={styles.modal_content}>
                {children}
            </div>
        </>, document.getElementById('cart_modal'))
    )
}


export default Modal;