import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Menus from "./components/common/Menus";
import { DarkModeProvider } from "./context/DarkModeContext";
function App() {
  return (
    <DarkModeProvider>
      <Layout>
        <Menus>
          <Nav />
        </Menus>
        <Main>
          <About />
          <Education />
          <Projects />
          <Contact />
        </Main>
        <Footer />
      </Layout>
    </DarkModeProvider>
  );
}

export default App;
