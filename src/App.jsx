import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Tracks from "./components/tracks/Tracks"
import Timeline from "./components/timeline/Timeline"
import Speakers from "./components/speakers/Speakers"
import Footer from "./components/footer/Footer"
import Cursor from "./ui/Cursor"

export default function App(){
  return(
    <>
      <Cursor/>
      <Hero/>
      <About/>
      <Tracks/>
      <Timeline/>
      <Speakers/>
      <Footer/>
    </>
  )
}
