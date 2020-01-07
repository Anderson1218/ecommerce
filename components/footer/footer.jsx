import React from "react";
import styled from "styled-components";
import { Grommet as GrommetIcon } from "grommet-icons";
import { Anchor, Box, Footer, Text } from "grommet";

const StyledAnchor = styled(Anchor)`
  font-weight: 200;
`;

const FooterAnchor = ({ ...rest }) => (
  <StyledAnchor href="/" size="small" color="white" {...rest} />
);

const data = [
  ["Test1", "Hello"],
  ["Test2", "Hello"],
  ["Test3", "Hello"],
  ["Test4", "Hello"]
];

const FooterContent = () => {
  return data.map(item => (
    <Box gap="medium" key={item[0]}>
      <Text weight="bold" size="small">
        {item[0]}
      </Text>
      <Box>
        {[1, 2, 3, 4].map(i => (
          <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
        ))}
      </Box>
    </Box>
  ));
};

const DoubleFooter = () => {
  return (
    <Box>
      <Footer background="dark-1" pad="large" height="medium">
        {data.map(item => (
          <Box gap="medium" key={item[0]}>
            <Text weight="bold" size="small">
              {item[0]}
            </Text>
            <Box>
              {[1, 2, 3, 4].map((i, index) => (
                <FooterAnchor key={index}> {item[i]} </FooterAnchor>
              ))}
            </Box>
          </Box>
        ))}
      </Footer>
      <Footer
        background="dark-2"
        pad={{ horizontal: "large", vertical: "small" }}
      >
        <Box direction="row" gap="small">
          <GrommetIcon color="brand" />
          <Text alignSelf="center">Anderson</Text>
        </Box>
        <Text textAlign="center" size="small">
          © 2020 Copyright
        </Text>
      </Footer>
    </Box>
  );
};

export default DoubleFooter;
