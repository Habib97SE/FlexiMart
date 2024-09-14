import { Href } from "@/Constants";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import SocialMediaIcons from "./SocialMediaIcons";

const RegisterForm = () => {
  return (
    <Form className="form-horizontal auth-form">
      <FormGroup>
        <Input required name="login[username]" type="email" className="form-control" placeholder="Username" id="exampleInputEmail12" />
      </FormGroup>
      <FormGroup>
        <Input required name="login[password]" type="password" className="form-control" placeholder="Password" />
      </FormGroup>
      <FormGroup>
        <Input required name="login[password]" type="password" className="form-control" placeholder="Confirm Password" />
      </FormGroup>
      <div className="form-terms">
        <div className="custom-control custom-checkbox me-sm-2">
          <Label className="d-block">
            <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />I agree all statements in{" "}
            <span>
              <a href={Href}>Terms &amp; Conditions</a>
            </span>
          </Label>
        </div>
      </div>
      <div className="form-button">
        <Button color="primary" type="submit">
          Register
        </Button>
      </div>
      <div className="form-footer">
        <span>Or Sign up with social platforms</span>
        <SocialMediaIcons />
      </div>
    </Form>
  );
};

export default RegisterForm;
