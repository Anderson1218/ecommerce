import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ModalContext from "../../context/modalContext";
import { signUpStartAsync } from "../../redux/user/user.action";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modalContext = useContext(ModalContext);
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(signUpStartAsync(email, password, name));
    modalContext.closeModal();
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
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
