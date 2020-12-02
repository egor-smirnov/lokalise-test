import { Language } from '../types';

import englishIcon from '../assets/icons/english.svg';
import russianIcon from '../assets/icons/russian.svg';
import italianIcon from '../assets/icons/italian.svg';
import macedonianIcon from '../assets/icons/macedonian.svg';

export const mockedNewlyAddedLanguage: Language = {
  languageTitle: 'English',
  donePercentage: 20,
  wordsToDo: 16246,
  unverified: 50000,
  icon: englishIcon,
};

export const mockedLanguages: Language[] = [
  {
    id: 1,
    languageTitle: 'English',
    donePercentage: 20,
    wordsToDo: 16246,
    unverified: 50000,
    icon: englishIcon,
  },
  {
    id: 2,
    languageTitle: 'Russian',
    donePercentage: 45,
    wordsToDo: 16246,
    unverified: 50000,
    icon: russianIcon,
  },
  {
    id: 3,
    languageTitle: 'Italian',
    donePercentage: 83,
    wordsToDo: 16246,
    unverified: 50000,
    icon: italianIcon,
  },
  {
    id: 4,
    languageTitle: 'Macedonian',
    donePercentage: 67,
    wordsToDo: 16246,
    unverified: 50000,
    icon: macedonianIcon,
  },
];
