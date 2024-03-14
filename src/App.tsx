import { Container } from "@chakra-ui/react";
import Header from "./components/Home/Header";
import Toggletheme from "./subcomponents/Toggletheme";
import Footer from "./components/Home/Footer";
import "./App.css";
import Banner from "./components/Home/Banner";
import Slider from "./components/Home/Slider";
import VideoDetail from "./components/Home/VideoDetail";
function App() {
  return (
    <Container maxWidth="100vw" p={0} m={0}>
      <Toggletheme />
      <Header />
      <Banner />
      <Slider />
      <VideoDetail />
      <Footer />
    </Container>
  );
}

export default App;
