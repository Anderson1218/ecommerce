import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LoginForm from "../login-form/login-form";
import RegisterForm from "../register-form/register-form";

function CustomModal(props) {
  const [showLoginForm, setIsLogin] = useState(true);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {showLoginForm ? "登入" : "註冊"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showLoginForm ? <LoginForm /> : <RegisterForm />}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setIsLogin(!showLoginForm)}>
          {showLoginForm ? "快速註冊" : "已有帳號"}
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
