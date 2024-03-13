import { Container } from "@chakra-ui/react";
import Header from "./components/Home/Header";
import Toggletheme from "./subcomponents/Toggletheme";
import Footer from "./components/Home/Footer";
import "./App.css";
import Banner from "./components/Home/Banner";
import Slider from "./components/Home/Slider";
function App() {
  return (
    <Container minWidth="100vw" p={0} m={0}>
      <Toggletheme />
      <Header />
      <Banner />
      <Slider/>
      <Footer />
    </Container>
  );
}

export default App;
