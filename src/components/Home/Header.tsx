import { FaCaretDown } from "react-icons/fa";
import Wolf from "../../../public/wolf.png";
import Market from "../../../public/market.png";
import Workshop from "../../../public/workshop.png";
import Learn from "../../../public/learn.png";
import Token from "../../../public/token.png";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  VStack,
} from "@chakra-ui/react";
interface ListItem {
  text: string;
  listItem: string[];
  icon: any;
}
const MenuNav = (props: ListItem) => (
  <>
    <Flex direction={"row"} gap={2} alignItems={"center"}>
      <Menu>
        <Image
          color="#7192b0"
          boxSize="22px"
          src={props.icon}
          alt="Dan Abramov"
          _hover={{ color: "#fff" }}
        />
        <MenuButton
          position={"relative"}
          _hover={{ color: "#fff" }}
          color={"#7192b0"}
          fontSize={"15px"}
          fontWeight={700}
        >
          {props.text.toUpperCase() || "loading"}
        </MenuButton>
        <MenuList
          borderColor={"#7192b0"}
          left={"-19px"}
          bg={"#0f1b27"}
          position={"absolute"}
        >
          {props.listItem.map((item) => (
            <MenuItem bg={"#0f1b27"} _hover={{ bg: "#7192b0" }} color={"white"}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
        <FaCaretDown style={{ marginLeft: -5 }} color={"#7192b0"} />
      </Menu>
    </Flex>
  </>
);
const Header: React.FC = () => {
  return (
    <VStack>
      <Container
        zIndex={99}
        position={"fixed"}
        minWidth="100vw"
        display={["none", "none", "block", "block"]}
        bg="#0f1b27"
        color="#0a0a0a"
        height={"80px"}
      >
        <Flex alignItems="center" gap="10" height="100%">
          <Image
            boxSize="50px"
            objectFit="cover"
            src="../../../public/logo2.png"
            alt="DVT"
          />

          <MenuNav
            text="EXPANSIONS"
            listItem={["Download", "Hello"]}
            icon={Wolf}
          />

          <MenuNav text="MARKET" listItem={["About", "Hello"]} icon={Market} />
          <MenuNav
            text="WORKSHOP"
            listItem={["Contact", "Hello"]}
            icon={Workshop}
          />
          <MenuNav text="LEARN" listItem={["Download", "Hello"]} icon={Learn} />
          <MenuNav
            text="$GODs TOKEN"
            listItem={["Download", "Hello"]}
            icon={Token}
          />
          <Spacer />
          <Flex gap={10} padding={10}>
            <Button
              fontSize={20}
              _hover={{ color: "white" }}
              color="#fff"
              variant="link"
            >
              CREATE ACCOUNT
            </Button>
            <Link to="/login">
              <Button
                fontSize={20}
                _hover={{ bg: "#ebedf0", borderColor: "#7192b0", scale: 1.1 }}
                color="#7192b0"
                variant="outline"
              >
                LOGIN
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </VStack>
  );
};

export default Header;
