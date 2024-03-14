import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import ButtonPrimary from "../../subcomponents/ButtonPrimary";
const Step = () => {
  return (
    <Container
      p={0}
      pos={"relative"}
      minHeight={"40vh"}
      minWidth={"100%"}
      maxWidth={"md"}
      position={"relative"}
      bgImage={
        "https://assets-global.website-files.com/64def6e5a3fa6068102b4f00/64e44f1ee6dfc41c47309469_misc-art--blurry-sorceress%402x.webp"
      }
      objectFit={"cover"}
      bgPosition={"50%"}
      bgSize={"cover"}
      borderBottomWidth={5}
      tabIndex={23}
      borderBottomColor={"#ebc98b "}
    >
      <Box
        w={"35%"}
        textAlign={"center"}
        position={"absolute"}
        marginTop={"15%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        top={"-50%"}
      >
        <Text
        lineHeight={1.2}
          fontFamily={`"Roboto Slab", serif`}
          fontWeight={700}
          fontStyle={"normal"}
          textShadow={"0 2px 10px #0a0a0a"}
          fontSize={"2.5rem"}
        >
          STEP INTO THE FUTURE OF TRADING GAMES
        </Text>
      </Box>

      <Box
        position={"absolute"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        top={"60%"}
      >
        <ButtonPrimary text={"PLAY NOW"} />
      </Box>
    </Container>
  );
};

export default Step;
