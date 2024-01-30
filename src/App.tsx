import { Container } from "@chakra-ui/react";
import Header from "./components/Home/Header";
import Toggletheme from "./subcomponents/toggletheme";
import Footer from "./components/Home/Footer";
import "./App.css"
function App() {
  return (
    <Container minWidth="100vw">
      <Toggletheme />
      <Header />
      <Footer />
    </Container>
  );
}

export default App;
