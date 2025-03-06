import Header from "./components/header";
import Home from "./components/home";
import Ongoing from "./components/Startupathon_ongoing";
import Guide from "./components/Startupathon_guide";
import Completed from "./components/Startupathon_completed";
import Network from "./components/Mentor_network";
import Footer from "./components/footer";
import "./App.css";
import "@fontsource/open-sans";

function App() {
  return (
    <div className="text-white bg-black">
      <Header />
      
      {/* Add top padding so content isn't hidden behind the fixed header */}
      <div className="pt-20">
        <div id="home">
          <Home />
        </div>
        <div id="ongoing">
          <Ongoing />
        </div>
        <div id="guide">
          <Guide />
        </div>
        <div id="completed">
          <Completed />
        </div>
        <div id="network">
          <Network />
        </div>
       
      </div>

      <Footer />
    </div>
  );
}

export default App;
