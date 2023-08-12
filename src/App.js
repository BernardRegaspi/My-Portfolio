import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Services";
import Theme from "./components/Theme";
import { useState, useEffect, } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { ChakraProvider } from "@chakra-ui/react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState();
  const url = window.location.href;

  useEffect(() => {
    setLoading(true);
    if (url !== "http://localhost:3000/") {
      setLoading(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <ChakraProvider theme={Theme}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
              <Route path="/services">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </ChakraProvider>
        </Router>
      )}
    </>
  );
}

export default App;
