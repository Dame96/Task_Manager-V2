import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithNavigate from './providers/Auth0Provider.tsx';
import { TaskProvider } from './context/TaskContext.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <Auth0ProviderWithNavigate>
    <TaskProvider> 
      <App />
    </TaskProvider>
  </Auth0ProviderWithNavigate>
  </BrowserRouter>
  </StrictMode>
);

// wrapping app in task provider to ensure tasks persist while navigating between routes. (Global API Context)
// wrapped browser router to enable routing in the app, handle url changes
// wrapped auth0 provider to enable authentication and authorization in the app, handle user registration, login and logout
