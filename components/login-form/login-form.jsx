import React, { useState, useContext } from "react";
import { Text } from "./login-form.styles";
import { Form } from "react-bootstrap";
import CustomButton from "../custom-button/custom-button";
import { emailSignInStartAsync } from "../../redux/user/user.action";
import { useSelector, useDispatch } from "react-redux";
import ModalContext from "../../context/modalContext";
import { selectUserError } from "../../redux/user/user.selectors";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userError = useSelector(selectUserError);
  const dispatch = useDispatch();
  const modalContext = useContext(ModalContext);
  const handleSubmit = async event => {
    event.preventDefault();
    const err = await dispatch(emailSignInStartAsync(email, password));
    if (!err) {
      modalContext.closeModal();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>
      <CustomButton inverted type="submit">
        Submit
      </CustomButton>
      {userError && <Text>{userError}</Text>}
    </Form>
  );
};

export default LoginForm;
