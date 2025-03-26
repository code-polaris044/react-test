import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

export default App;

createRoot(document.getElementById('root')).render(<App />);
