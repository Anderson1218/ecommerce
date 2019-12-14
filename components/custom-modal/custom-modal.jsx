import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import LoginForm from "../login-form/login-form";
import RegisterForm from "../register-form/register-form";
import { clearErrorInfo } from "../../redux/user/user.action";
import CustomButton from "../custom-button/custom-button";

function CustomModal(props) {
  const [showLoginForm, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onEnter={() => dispatch(clearErrorInfo())}
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
        <CustomButton
          onClick={() => {
            setIsLogin(!showLoginForm);
            dispatch(clearErrorInfo());
          }}
          inverted
        >
          {showLoginForm ? "快速註冊" : "已有帳號"}
        </CustomButton>
        <CustomButton inverted onClick={props.onHide}>
          Close
        </CustomButton>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
