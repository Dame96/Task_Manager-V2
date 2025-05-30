// Auth0 Provider for React app, which wraps the Auth0Provider component from the auth0-react library.
// this handles registration, login, logout and user authentication.


import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Auth0ProviderWithNavigateProps = {
  children: any;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const domain = "dev-8pozjypyjv8gstgt.us.auth0.com";
  const clientId = "ojvc9CJuIBNYeuUO54Dcno4jTJv9ksoW";
  const redirectUri = "http://localhost:5173/"; 

  const onRedirectCallback = (appState: any) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  
  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;

