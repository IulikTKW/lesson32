import { Icon } from '../Icon';
import CloseIcon from '../../assets/circle-xmark.png';
import './styles.css'
import clsx from 'clsx';


const Modal = ({ isOpen, closeModal, children }) => { 

    const handleClose = () => {
        closeModal(null)
    }

    return (
        <div className={clsx('modal-wrapper', {
            'modal-active': isOpen,

        })}>
            <div className='modal-container'>
                {children}
                <div className='modal-icon' onClick={handleClose}>
                    <Icon src={CloseIcon} />
                </div>
            </div>
        </div>
    )

}

export default Modal;