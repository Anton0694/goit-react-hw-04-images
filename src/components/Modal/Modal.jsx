import { useEffect } from 'react'
import { createPortal } from 'react-dom';
import {Overlay, ModalBox} from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')
export const Modal = ({onModalClick, data, closeModal}) => {
   
    
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
            
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
            
    }, [closeModal]);  

        return createPortal (
            <Overlay onClick={onModalClick}>
                <ModalBox>
                   <img src={data.largeImageURL} alt={data.largeImageURL} />
                </ModalBox>
            </Overlay>,
            modalRoot
        );
}
    
