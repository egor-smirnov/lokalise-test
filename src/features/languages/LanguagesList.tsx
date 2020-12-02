import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { selectLanguagesList } from './languagesSlice';
import { LanguagesProgressDetails } from '../../components/LanguageProgressDetails';
import { AddLanguageModal } from './AddLanguageModal';

export interface LanguagesListProps {}

export const LanguagesList: React.FC<LanguagesListProps> = () => {
  const languagesList = useSelector(selectLanguagesList);
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => {
    setModalShow(false);
  };

  const handleButtonClick = () => {
    setModalShow(true);
  };

  return (
    <div className="d-flex flex-wrap">
      {modalShow ? (
        <AddLanguageModal show={modalShow} onHide={handleModalClose} />
      ) : null}
      {languagesList.map((language) => (
        <LanguagesProgressDetails language={language} key={language.id} />
      ))}
      <Button variant="outline-primary" onClick={handleButtonClick}>
        Add language
      </Button>
    </div>
  );
};
