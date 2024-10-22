
import Header from "./component/header/header";
import Hero from "./component/hero/hero";
import About from "./about/page";
import Services from "./services/page";

import Footer from "./component/footer/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
      
    </div>

  );
}
