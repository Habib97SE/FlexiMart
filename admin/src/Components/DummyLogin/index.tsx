import { Container, Row } from "reactstrap";
import LoginTabs from "./LoginTabsDummy";
import LoginSlider from "@/Layout/Login/LoginSlider";

const DummyLogin = () => {
  return (
    <div className="page-wrapper">
      <div className="authentication-box">
        <Container>
          <Row>
            <LoginSlider />
            <LoginTabs />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DummyLogin;
