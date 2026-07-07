import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../feacture/themeSlice'; // Aapka purana theme slice

import cartReducer from './slice/cartSlice'; // Aapka naya cart slice

export const store = configureStore({
  reducer: {
    theme: themeReducer,  // Isse App.jsx ka 'darkMode' wala error theek ho jayega
    cart: cartReducer,    // Isse aapka Add to Cart aur live numbering chalne lagega
  },
});
