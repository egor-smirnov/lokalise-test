import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { mockedNewlyAddedLanguage } from '../../mockData/languages';
import { addLanguage } from './languagesSlice';

export interface AddLanguageModalProps {
  show: boolean;
  onHide: () => void;
}

export const AddLanguageModal: React.FC<AddLanguageModalProps> = ({
  show,
  onHide,
}) => {
  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(addLanguage(mockedNewlyAddedLanguage));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add languages</Modal.Title>
      </Modal.Header>
      <Modal.Body>form here</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onAddClick}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
