// LoginButton.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  if(!isAuthenticated) return (<Button onClick={handleLogin}>Log In</Button>)
  return null;
};

export default LoginButton;

// This component uses Auth0's useAuth0 hook to manage authentication and redirect the user back to the, 
// profile page once they are logged in successfully. 