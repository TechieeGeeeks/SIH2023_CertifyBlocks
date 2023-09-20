import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProblemStatement from "./components/ProblemStatement";
import Footer from "./components/Footer";
import Solution from "./components/Solution";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="">
      <main>
        <Header />
        <div className="md:p-12 p-8">
          <ProblemStatement />
          <Solution />
          <TechStack />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
