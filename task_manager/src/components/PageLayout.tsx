//PageLayout.tsx
import { Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import NavBarButtons from "./NavBarButtons";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Col>
      <NavBar />
      </Col>
      <h1>Task App v.6</h1>
      {children}
      <footer>
        <NavBarButtons />
      </footer>
    </Container>
  );
};

export default PageLayout;

// this will display the nav bar, buttons and content
// // This component serves as a layout for the application, providing a consistent structure