import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Analytics/>
  </BrowserRouter>
)
