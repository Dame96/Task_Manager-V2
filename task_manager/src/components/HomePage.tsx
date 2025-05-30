//Home-page.tsx
import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

// Home Page Component which displays login button prompting user to login to access the app.
// Will Redirect User to Auth0 login page when clicked.

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
        <h1>Hello World!</h1>
        <h2> Welcome to Task Manager 6.0</h2>
        <p>The Road To Productivity Starts Here...</p>
        <p>Please Log In:</p>
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;