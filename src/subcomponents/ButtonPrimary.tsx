import { Box, Text } from "@chakra-ui/react";

const ButtonPrimary: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      cursor={"pointer"}
      _before={{
        display: "block",
        content: '""',
        position: "absolute",
        inset: "1px",
        background:
          "linear-gradient(rgb(255, 242, 216) 0%, rgb(235, 201, 139) 49.48%, rgb(198, 160, 82) 100%);",
        clipPath:
          "polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)",
        zIndex: 1,
      }}
      _after={{
        inset: "5px 6px",
        backgroundColor: "rgb(29, 47, 65)",
        clipPath:
          "polygon(9.5px 0%, calc(100% - 9.5px) 0%, 100% 50%, calc(100% - 9.5px) 100%, 9.5px 100%, 0% 50%)",
        display: "block",
        content: '""',
        position: "absolute",
        zIndex: "2",
      }}
    >
      <Box
        border="medium"
        minHeight={"1.85em"}
        clipPath={
          "polygon(8.5px 0%, calc(100% - 8.5px) 0%, 100% 50%, calc(100% - 8.5px) 100%, 8.5px 100%, 0% 50%)"
        }
        backgroundColor={"rgb(10, 10, 10)"}
        w={"auto"}
        h={"auto"}
        paddingLeft={"2rem"}
        paddingRight={"2rem"}
        margin={"0.4375rem 0.5rem"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        zIndex={4}
        _hover={{
          backgroundColor: "#c6a052",
          "& > p": {
            background: "rgb(10, 10, 10)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          },
        }}
      >
        <Text
          backgroundColor={"#c6a052"}
          color={"#f6f6f6"}
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
          backgroundImage={
            "background-image: linear-gradient(#fff2d8,#ebc98b 49.48%,#c6a052)"
          }
          backgroundClip={"text"}
          zIndex={5}
          fontWeight={700}
          fontSize={"1.125rem"}
          position={"relative"}
          textTransform={"uppercase"}
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default ButtonPrimary;
