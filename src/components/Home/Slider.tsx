import { Box, Container, Image, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import ButtonPrimary from "../../subcomponents/ButtonPrimary";
const Slider: React.FC = () => {
  return (
    <Container
      minWidth={"100vw"}
      bgSize={"cover"}
      borderBottomWidth={5}
      tabIndex={23}
      borderBottomColor={"#ebc98b"}
      margin={0}
      padding={0}
      position={"relative"}
      overflow={"hidden"}
    >
      <ReactPlayer
        style={{ marginTop: -50 }}
        width={"100vw"}
        height={"auto"}
        playsinline
        muted
        playing={true}
        url="https://assets-global.website-files.com/64def6e5a3fa6068102b4f00/6571136fa3d18044243b4bea_gu_loopingvideo3 (720p)-transcode.mp4"
      />
      <Box
        position={"absolute"}
        top={"20%"}
        marginTop={"15%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
      >
        <Image
          width={"90%"}
          maxWidth={400}
          minWidth={290}
          src="https://assets-global.website-files.com/64def6e5a3fa6068102b4f00/64e2a7b8641668b4c5b14ede_logo--gods-unchained-outline-p-500.png"
          alt="Logo"
        />
      </Box>
      <Text
        position={"absolute"}
        top={"35%"}
        marginTop={"15%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        fontFamily={`"Roboto Slab", serif`}
        fontWeight={700}
        fontStyle={"normal"}
        textShadow={"0 2px 10px #0a0a0a"}
        fontSize={"2rem"}
      >
        THE TRADING CARD GAME WHERE EVERY
      </Text>
      <Text
        position={"absolute"}
        top={"38%"}
        marginTop={"18%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        fontFamily={`"Roboto Slab", serif`}
        fontWeight={700}
        fontStyle={"normal"}
        textShadow={"0 2px 10px #0a0a0a"}
        fontSize={"2rem"}
      >
        CARD AND VICTORY IS TRULY YOURS
      </Text>
      <Box
        position={"absolute"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
          bottom={"10%"}
      >
        <ButtonPrimary text={"PLAY NOW"} />
      </Box>
    </Container>
  );
};

export default Slider;
