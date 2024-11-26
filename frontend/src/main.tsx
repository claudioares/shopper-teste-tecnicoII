import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextProvider from './useContext/contextApi.tsx'
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes/routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <MainRoutes />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
)
