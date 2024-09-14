import { useAppSelector } from "@/Redux/Hooks";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import SocialMediaIcons from "./SocialMediaIcons";

const LoginForm = () => {
  const { i18LangStatus } = useAppSelector((store) => store.LangReducer);
  const [showPassWord, setShowPassWord] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "Test@gmail.com",
    password: "Test@123",
  });
  const { email, password } = formValues;
  const router = useRouter();
  const handleUserValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();
    if (email === "Test@gmail.com" && password === "Test@123") {
      Cookies.set("token", JSON.stringify(true));
      router.push(`${process.env.PUBLIC_URL}/${i18LangStatus}/dashboard`);
      toast.success("login successful");
    } else {
      toast.error("Please Enter Valid Email Or Password");
    }
  };
  return (
    <Form className="form-horizontal auth-form" onSubmit={formSubmitHandle}>
      <FormGroup>
        <Input required onChange={handleUserValue} type="email" value={formValues.email} placeholder="Username" id="exampleInputEmail1" />
      </FormGroup>
      <FormGroup>
        <InputGroup onClick={() => setShowPassWord(!showPassWord)}>
          <Input required onChange={handleUserValue} type={showPassWord ? "text" : "password"} value={formValues.password} placeholder="Password" />
          <InputGroupText>{showPassWord ? <Eye /> : <EyeOff />}</InputGroupText>
        </InputGroup>
        {/* <Input required onChange={handleUserValue} type="password" value={formValues.password} placeholder="Password" /> */}
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
        <Button color="primary" type="submit">
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
