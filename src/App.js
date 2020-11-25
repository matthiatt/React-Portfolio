// Used tutorial to help instal bootstrap and the props here. Def 100% helped and now I understand it.
// Had to use their CSS properties with bootstrap, messing around with them as I go so I can get more familiar with them and how they work.
// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

// import Title from "./components/title";
import Navbar from "./components/Navbar/navBar";
import Footer from "./components/Footer/footer";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
// import ProjectsPage from "./components/ProjectsPage/importProject";
import Button from "./components/Navbar/Button"; // Cant get this to render on my page.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Matthew Hiatt",
      headerLinks: [
        { title: "Matthew Hiatt", path: "/" },
        { title: "Home", path: "/home" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      homePage: {
        mainTitle: "Innovative, Creative, and Logistical Problem Solving",
        scdTitle: "My moto: Work smarter, not harder.",
        msg: "Take a look at my work down below.",
      },
      aboutMe: {
        msg: "About Me",
      },
      contactMe: {
        msg:
          "Contact me, let's talk and make possibilities for future of tomorrow.",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-top" expand="xl">
            <Navbar.Name>Matthew Hiatt</Navbar.Name>
            <Navbar.Open className="border-3" aria-controls="navbarClick" />
            <Navbar.Close id="navbarClick">
              <Link className="navLink" to="/">
                Matthew Hiatt
              </Link>
              <Link className="navLink" to="/home">
                Home
              </Link>
              <Link className="navLink" to="/about">
                About
              </Link>
              <Link className="navLink" to="/contact">
                Contact
              </Link>
              <Button />
            </Navbar.Close>
          </Navbar>
          {/* <ProjectsPage /> */}
          <Route
            path="/"
            exact
            render={() => (
              <Home
                mainTitle={this.state.homePage.mainTitle}
                scdTitle={this.state.homePage.scdTitle}
                msg={this.state.homePage.msg}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <About mainTitle={this.state.aboutMe.msg} />}
          />
          <Route
            path="/contact"
            render={() => <Contact mainTitle={this.state.contactMe.msg} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Container>
//         <Navbar />
//         <Title />

//         <Footer />
//       </Container>
//     </div>
//   );
// }

// export default App;
