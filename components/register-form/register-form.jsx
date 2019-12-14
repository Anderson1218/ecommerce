import React, { useState, useContext } from "react";
import { Text } from "./register-form.styles";
import { Form } from "react-bootstrap";
import CustomButton from "../custom-button/custom-button";
import { useSelector, useDispatch } from "react-redux";
import ModalContext from "../../context/modalContext";
import { signUpStartAsync } from "../../redux/user/user.action";
import { selectUserError } from "../../redux/user/user.selectors";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userError = useSelector(selectUserError);
  const [password, setPassword] = useState("");
  const modalContext = useContext(ModalContext);
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const err = await dispatch(signUpStartAsync(email, password, name));
    if (!err) {
      modalContext.closeModal();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Display name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Group>
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

export default RegisterForm;
