import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Language } from '../../types';
import { mockedLanguages } from '../../mockData/languages';

interface LanguagesState {
  list: Language[];
}

const initialState: LanguagesState = {
  list: mockedLanguages,
};

export const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    addLanguage(state, action: PayloadAction<Language>) {
      const languageObj = action.payload;
      return {
        ...state,
        list: [...state.list, languageObj],
      };
    },
  },
});

export const { addLanguage } = languagesSlice.actions;

export const selectLanguagesList = (state: RootState) => state.languages.list;

export default languagesSlice.reducer;
