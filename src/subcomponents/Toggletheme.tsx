import { CiSun } from "react-icons/ci";
import { Box, Container, Icon, useColorMode } from "@chakra-ui/react";
const Toggletheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container >
      <Box position="fixed" top={3} right={3}>
        <Icon
          cursor={"pointer"}
          as={CiSun}
          w={8}
          h={8}
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </Icon>
      </Box>
    </Container>
  );
};

export default Toggletheme;
