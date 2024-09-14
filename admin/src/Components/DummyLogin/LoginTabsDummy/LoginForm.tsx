import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import SocialMediaIcons from "./SocialMediaIcons";

const LoginForm = () => {
  const { i18LangStatus } = useAppSelector((store) => store.LangReducer);
  const [showPassWord, setShowPassWord] = useState(false);
  const router = useRouter();

  return (
    <Form className="form-horizontal auth-form">
      <FormGroup>
        <Input required type="email" placeholder="Username" id="exampleInputEmail1" />
      </FormGroup>
      <FormGroup>
        <InputGroup onClick={() => setShowPassWord(!showPassWord)}>
          <Input required type={showPassWord ? "text" : "password"} placeholder="Password" />
          <InputGroupText>{showPassWord ? <Eye /> : <EyeOff />}</InputGroupText>
        </InputGroup>
      </FormGroup>
      <div className="form-terms">
        <div className="custom-control custom-checkbox me-sm-2">
          <Label className="d-block">
            <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />
            Reminder Me
            <span className="pull-right">
              <Button color="transparent" className="forgot-pass p-0">
                lost your password
              </Button>
            </span>
          </Label>
        </div>
      </div>
      <div className="form-button">
        <Button onClick={() => router.push(`/${i18LangStatus}/dashboard`)} color="primary" type="submit">
          Login
        </Button>
      </div>
      <div className="form-footer">
        <span>Or Login up with social platforms</span>
        <SocialMediaIcons />
      </div>
    </Form>
  );
};

export default LoginForm;
