// import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Title from "./components/title";
import Navbar from "./components/Navbar/navBar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Title />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
