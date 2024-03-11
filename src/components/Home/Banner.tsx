import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import ButtonPrimary from "../../subcomponents/ButtonPrimary";

const Banner: React.FC = () => {
  return (
    <Container
      p={0}
      mt={"80px"}
      pos={"relative"}
      minHeight={"28vh"}
      minWidth={"100%"}
      maxWidth={"md"}
      position={"relative"}
      bgImage={
        "https://assets-global.website-files.com/64ea43aceab444bc09b7482e/653a4ab9bec116dfe9509ea8_slide-1-hero2.jpg"
      }
      bgPosition={"50%"}
      bgSize={"cover"}
      borderWidth={3}
      tabIndex={23}
      borderColor={"#ebc98b "}
    >
      <Box pos={"absolute"} left={10}>
      <VStack tabIndex={1} color={"red"} _active={"action"}>
        <Box>
          <Flex textUnderlineOffset={0}>
            <Box>
              <Image
                h={150}
                w={157}
                src="https://assets-global.website-files.com/64ea43aceab444bc09b7482e/653a190e3ccb4674d79a5136_6507948f9d60b1182ef1ea42_logo_a1_render%20(2)-p-500.png"
              ></Image>
              <VStack>
                <Box></Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
      <ButtonPrimary />
    </Container>
  );
};

export default Banner;