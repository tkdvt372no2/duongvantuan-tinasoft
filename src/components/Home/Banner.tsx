import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
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
      borderBottomWidth={5}
      tabIndex={23}
      borderBottomColor={"#ebc98b "}
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
      <Text
        fontFamily={`"Roboto Slab", serif`}
        fontWeight={700}
        fontStyle={"normal"}
        textShadow={"0 2px 10px #0a0a0a"}
        fontSize={"2rem"}
        position={"absolute"}
        right={"10"}
        top={"10%"}
      >
        New Set: Tides of Fate!
      </Text>
      <Text position={"absolute"} fontSize={"1.5em"} right={10} top={"35%"}>
        Now Available!
      </Text>
      <Box position={"absolute"} right={10} top={"60%"}>
        <ButtonPrimary text={"FIND OUT MORE"} />
      </Box>
    </Container>
  );
};

export default Banner;
