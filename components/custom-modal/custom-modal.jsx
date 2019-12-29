import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearErrorInfo } from "../../redux/user/user.action";
import CustomButton from "../custom-button/custom-button";
import { Box, Layer, Heading, Select, Button } from "grommet";

import LoginForm from "../login-form/login-form";
import RegisterForm from "../register-form/register-form";
import { Modal } from "react-bootstrap";

function CustomModal(props) {
  const [showLoginForm, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  return (
    <>
      {props.show ? (
        <Layer position="center" modal>
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Confirm 2
            </Heading>
            <Select options={["one", "two", "three"]} />
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: "medium", bottom: "small" }}
            >
              <Button label="Close" color="dark-3" />
            </Box>
          </Box>
        </Layer>
      ) : null}
    </>
    // <Modal
    //   {...props}
    //   size="md"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    //   onEnter={() => dispatch(clearErrorInfo())}
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       {showLoginForm ? "登入" : "註冊"}
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     {showLoginForm ? <LoginForm /> : <RegisterForm />}
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <CustomButton
    //       onClick={() => {
    //         setIsLogin(!showLoginForm);
    //         dispatch(clearErrorInfo());
    //       }}
    //       inverted
    //     >
    //       {showLoginForm ? "快速註冊" : "已有帳號"}
    //     </CustomButton>
    //     <CustomButton inverted onClick={props.onHide}>
    //       Close
    //     </CustomButton>
    //   </Modal.Footer>
    // </Modal>
  );
}

export default CustomModal;
