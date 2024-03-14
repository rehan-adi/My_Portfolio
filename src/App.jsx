import About from "./AllComponenents/About"
import Contact from "./AllComponenents/Contact"
import Experience from "./AllComponenents/Experience"
import MainSection from "./AllComponenents/MainSection"
import Navbar from "./AllComponenents/Navbar"
import Particals from "./AllComponenents/Particals"
import Proojects from "./AllComponenents/Proojects"


function App() {

  return (
    <>
      {/* <Particals /> */}
      <div className="max-w-[100vw]">
        <Navbar />
        {/* <MainSection />
        <About />
        <Proojects />
        <Experience />
        <Contact /> */}
      </div>

    </>
  )
}

export default App
