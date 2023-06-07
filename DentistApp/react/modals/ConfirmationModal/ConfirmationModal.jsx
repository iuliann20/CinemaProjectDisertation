import { useDispatch, useSelector } from 'react-redux';
import { toggleConfirmationModal } from 'actions/modal';
import { Button, Modal } from 'react-bootstrap';
import React from 'react';

export default function ConfirmationModal() {

    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);

    const closeModal = () => {
        dispatch(toggleConfirmationModal({
            callback: () => { }
        }));
    }

    const continueModal = () => {
        modal.callback();
        dispatch(toggleConfirmationModal({
            callback: () => { }
        }));
    }

    return (
        <Modal
            show={modal.showConfirmationModal}
            onHide={closeModal}>
            <Modal.Header>
                <Modal.Title>{modal.description}</Modal.Title>
                <span className="material-icons close-icon" onClick={closeModal}>
                    close
                </span>
            </Modal.Header>
            <Modal.Footer>
                <Button variant='outline-primary' onClick={closeModal}>
                    Nu
                </Button>
                <Button variant='primary' onClick={continueModal}>
                    Da
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
