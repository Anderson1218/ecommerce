import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { emailSignInStartAsync } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";
import ModalContext from "../../context/modalContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const modalContext = useContext(ModalContext);
  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(emailSignInStartAsync(email, password));
    modalContext.closeModal();
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
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
