import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
    
      state.darkMode = !state.darkMode;
    },
    setTheme: (state, action) => {
     
      state.darkMode = action.payload;
    }
  },
});

export const { toggleMode, setTheme } = themeSlice.actions;


export default themeSlice.reducer;