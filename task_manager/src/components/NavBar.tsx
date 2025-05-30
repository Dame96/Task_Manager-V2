//NavBar.tsx
import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

  return (
    <Navbar>
      <Nav>
        <Nav.Link href="/">Home |</Nav.Link>
        {isAuthenticated &&
            <>
                <Nav.Link href="/profile"> Profile |</Nav.Link>
                <Nav.Link href="/about"> About Us |</Nav.Link>
            </>
        }
      </Nav>
    </Navbar>
  );
};

export default NavBar;


// destructuring the `isAuthenticated` property from the `useAuth0` hook allows us to conditionally render navigation links based on the user's authentication status. 
// If the user is authenticated, we display links to the Profile and About Us pages; otherwise, only the Home link is shown. This ensures that users can only access certain parts of the application when they are logged in.