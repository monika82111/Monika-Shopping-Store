import React from "react";
import { Button, Flex, Segmented } from "antd";
const boxStyle = {
  width: "100%",
  height: 120,
  padding: "10px",
//   borderRadius: 6,
  border: "2px solid black",
  backgroundColor: "black",
  fontSize:"20px",
  marginTop:"10px",
};

const FooterComponent = () => {
  return (
    <Flex style={boxStyle} justify="space-around" align="center">
      <Button type="link">Privacy Policy</Button>
      <Button type="link">Terms & Conditions</Button>
      <Button type="link">Return Policy</Button>
      <Button type="link">+12345678</Button>
    </Flex>
  );
};
export default FooterComponent;
