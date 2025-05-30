//App.tsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route 
        path="/about"
        element={<AuthenticationGuard component={AboutPage} />}
      />
    </Routes>
  );
};

export default App;

// wrapped protected route with authentication guard to ensure only logged in user has access to those paths