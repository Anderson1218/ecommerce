import React from "react";
import { useState } from "react";
import { Form, FormField, Button, Box, TextInput, Text } from "grommet";
import { CaretNext } from "grommet-icons";
import { ButtonGroup } from "./login-signup-form.styles";

const LoginSignupForm = ({ handleSubmit, clearErrorInfo, error }) => {
  const [isLogin, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Box pad="medium" elevation="medium">
      <Form onSubmit={e => handleSubmit(e, { name, email, password }, isLogin)}>
        {!isLogin && (
          <FormField label="Name">
            <TextInput
              placeholder="placeholder"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormField>
        )}
        <FormField label="Email">
          <TextInput
            placeholder="placeholder"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormField>
        <FormField label="Password">
          <TextInput
            placeholder="placeholder"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormField>
        <ButtonGroup direction="row" justify="around">
          <Button type="submit" label={isLogin ? "Login" : "Register"} />
          <Button
            label={isLogin ? "To Register" : "To Login"}
            onClick={() => {
              resetFields();
              setLogin(!isLogin);
              clearErrorInfo();
            }}
            icon={<CaretNext />}
          />
        </ButtonGroup>
        {error && <Text color="status-error">{error}</Text>}
      </Form>
    </Box>
  );
};

export default LoginSignupForm;
