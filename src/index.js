import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import searchSlice from './searchSlice';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {
    search : searchSlice,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
    
  </React.StrictMode>
);


