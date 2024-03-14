import { Text, Box, Container, Image } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import ButtonPrimary from './../../subcomponents/ButtonPrimary';
const VideoDetail = () => {
  return (
    <Container
      backgroundImage={
        "https://assets-global.website-files.com/64ea43aceab444bc09b7482e/653a62f9627257656570c7a3_Valka_LC_BG.jpg"
      }
      backgroundPosition={"70% 10%"}
      maxWidth={"99vw"}
      h={"900"}
      bgSize={"cover"}
      minHeight={"80vh"}
      pos={"relative"}
      zIndex={2}
    >
      <Box>
        <Text
          width={"70vw"}
          textAlign={"center"}
          position={"absolute"}
          top={0}
          marginTop={"5%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            textShadow: "none",
          }}
          flexWrap={"wrap"}
          backgroundClip={"text"}
          fontFamily={`"Roboto Slab", serif`}
          fontWeight={700}
          fontStyle={"normal"}
          textShadow={"0 2px 10px #0a0a0a"}
          fontSize={"48px"}
          bgImage={"linear-gradient(#fff2d8,#c6a052)"}
        >
          OUTPLAY. OUTTHINK. OUTBUILD.
        </Text>
      </Box>
      <Text
        width={"90vw"}
        textAlign={"center"}
        position={"absolute"}
        top={0}
        marginTop={"10%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        flexWrap={"wrap"}
        fontFamily={`"Roboto Slab", serif`}
        fontWeight={700}
        fontStyle={"normal"}
        textShadow={"0 2px 10px #0a0a0a"}
        fontSize={"1em"}
      >
        Forge your destiny in Gods Unchained, the award-winning tactical card
        game where you master 6 domains and 1800+ cards. Unleash divine powers,
        create epic decks & strategically defeat your opponents! Led by game
        veterans from Magic: The Gathering Arena, Hearthstone, Riot Games and
        more, it's the ultimate destination for competitive card game
        enthusiasts.
      </Text>
      <Box
        pos={"absolute"}
        top={"500"}
        left={"50%"}
        minWidth={"80vw"}
        height={"600"}
        transform={"translate(-50%, -50%)"}
      >
        <Box
          borderRadius={50}
          minWidth={"80vw"}
          height={"600"}
          overflow={"hidden"}
          border={"4px solid #e5b56a"}
        >
          <ReactPlayer
            style={{ position: "relative", zIndex: 3 }}
            width={"100%"}
            height={"100%"}
            muted
            loop={true}
            playing={true}
            url="https://www.youtube.com/watch?v=cDESNiMi-i4"
          />
        </Box>
        <Image
          zIndex={"4"}
          pos={"absolute"}
          w={"8%"}
          height={"115%"}
          top={"-6%"}
          bottom={"auto"}
          left={"-4%"}
          right={"auto"}
          src="https://assets-global.website-files.com/64def6e5a3fa6068102b4f00/64eb4fefcd5072aa986692db_Picture%20%E2%86%92%20carousel-sidebar.webp.png"
        />
        <Image
          zIndex={"4"}
          pos={"absolute"}
          w={"8%"}
          height={"115%"}
          top={"-6%"}
          bottom={"auto"}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(0)rotateY(180deg)rotate(0)",
          }}
          left={"auto"}
          right={"-4%"}
          src="https://assets-global.website-files.com/64def6e5a3fa6068102b4f00/64eb4fefcd5072aa986692db_Picture%20%E2%86%92%20carousel-sidebar.webp.png"
        />
      </Box>
      <Box
        position={"absolute"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        bottom={"1%"}
      >
        <ButtonPrimary text={"PLAY FOR FREE"} />
      </Box>
    </Container>
  );
};

export default VideoDetail;
