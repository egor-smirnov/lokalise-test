import React from 'react';

import styles from './LanguageProgressBar.module.css';

export interface LanguageProgressBarProps {
  percentage: number;
}

const getClassBasedOnPercentage = (percentage: number) => {
  if (percentage < 25) {
    return styles.innerPercentageBlockRed;
  } else if (percentage < 75) {
    return styles.innerPercentageBlockYellow;
  } else {
    return styles.innerPercentageBlockBlue;
  }
};

export const LanguageProgressBar: React.FC<LanguageProgressBarProps> = ({
  percentage,
}) => {
  return (
    <div className={styles.percentageBlock}>
      <div
        className={`${styles.innerPercentageBlock} ${getClassBasedOnPercentage(
          percentage
        )}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
