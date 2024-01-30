import { FaCaretDown } from "react-icons/fa";
import { FaWolfPackBattalion } from "react-icons/fa";
import {
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
interface ListItem {
  text: string;
  listItem: string[];
}
const MenuNav = (props: ListItem) => (
  <>
    <Flex direction={"row"} gap={2} alignItems={"center"}>
      <Menu>
        <MenuButton color={"#7192b0"} fontSize={"16px"} fontWeight={700}>
          {props.text.toUpperCase() || "loading"}
        </MenuButton>
        <MenuList>
          {props.listItem.map((item) => (
            <MenuItem>{item}</MenuItem>
          ))}
        </MenuList>
        <FaCaretDown color={"#7192b0"} />
      </Menu>
    </Flex>
  </>
);
const Header: React.FC = () => {
  return (
    <VStack>
      <Container
        position={"fixed"}
        minWidth="100vw"
        bg="#0f1b27"
        color="#0a0a0a"
        height={"100px"}
      >
        <Flex alignItems="center" gap="10" height="100%">
          <Image
            boxSize="50px"
            objectFit="cover"
            src="../../../public/logo2.png"
            alt="DVT"
          />
          <MenuNav text="EXPANSIONS" listItem={["Download", "Hello"]} />
          <MenuNav text="MARKET" listItem={["About", "Hello"]} />
          <MenuNav text="WORKSHOP" listItem={["Contact", "Hello"]} />
          <MenuNav text="LEARN" listItem={["Download", "Hello"]} />
          <MenuNav text="$GODs TOKEN" listItem={["Download", "Hello"]} />
        </Flex>
      </Container>
    </VStack>
  );
};

export default Header;
