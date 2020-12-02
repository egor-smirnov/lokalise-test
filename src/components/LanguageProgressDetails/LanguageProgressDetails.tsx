import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Language } from '../../types';

import styles from './LanguageProgressDetails.module.css';
import { LanguageProgressBar } from '../LanguageProgressBar';

export interface LanguagesProgressDetailsProps {
  language: Language;
}

export const LanguagesProgressDetails: React.FC<LanguagesProgressDetailsProps> = ({
  language,
}) => {
  return (
    <div className={styles.languageDetailsBlock}>
      <Row noGutters>
        <Col className="d-flex">
          <img src={language.icon} alt="language name" />
          <h4 className={styles.languageTitle}>{language.languageTitle}</h4>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <LanguageProgressBar percentage={language.donePercentage} />
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <h5 className={styles.languageSubTitle}>Done</h5>
          <div className={styles.languageValue}>{language.donePercentage}%</div>
        </Col>
        <Col>
          <h5 className={styles.languageSubTitle}>Words to do</h5>
          <div
            className={`${styles.languageValue} ${styles.languageHighlightedValue}`}
          >
            {language.wordsToDo}
          </div>
        </Col>
        <Col>
          <h5 className={styles.languageSubTitle}>Unverified</h5>
          <div
            className={`${styles.languageValue} ${styles.languageHighlightedValue}`}
          >
            {language.unverified}
          </div>
        </Col>
      </Row>
    </div>
  );
};
