import React from "react";
import { Box, Layer, Heading, Select, Button } from "grommet";

function Modal({ children, onEsc, onClickOutside, ...props }) {
  return (
    <Layer
      position="center"
      modal
      onEsc={onEsc}
      onClickOutside={onClickOutside}
      {...props}
    >
      <Box pad="medium" gap="small" width="medium">
        <Heading level={3} margin="none">
          Welcome
        </Heading>
        {/* <Select options={["one", "two", "three"]} /> */}
        {children}
        <Box
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="end"
          pad={{ top: "medium", bottom: "small" }}
        >
          <Button label="Close" color="dark-3" onClick={onEsc} />
        </Box>
      </Box>
    </Layer>
  );
}

export default Modal;
