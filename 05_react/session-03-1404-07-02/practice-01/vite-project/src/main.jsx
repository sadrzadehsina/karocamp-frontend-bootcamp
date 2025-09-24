import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import AppWithContextApi from './AppWithContextApi.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppWithContextApi />
  </StrictMode>,
)
