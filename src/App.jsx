import About from "./components/About"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Proojects from "./components/Proojects"
import Particals from "./components/Particals"
import Experience from "./components/Experience"
import MainSection from "./components/MainSection"


function App() {

  return (
    <>
      {/* <Particals /> */}
      <div className="max-w-[100vw]">
        <Navbar />
        <MainSection />
        <About />
        <Proojects />
        <Experience />
        <Contact />
      </div>

    </>
  )
}

export default App
