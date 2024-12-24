import Portfolio from "../portfolio/portfolio";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import { Contact } from "../contact/contact";
import { About } from "../about/about";

function Home() {
  return (
    <div>
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
