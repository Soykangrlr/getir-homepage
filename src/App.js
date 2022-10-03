import Categories from "./components/categories/categories";
import Header from "./components/header/header";
import SliderLogin from "./components/slider-login/sliderLogin";
import Campaings from "./components/campaings/campaings";
import Mobile from "./components/mobile/mobile";
import Cards from "./components/cards/card";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
     <Header/>
     <SliderLogin/>
     <Categories/>
    
     <Campaings/>
     <Mobile/>
     <Cards/>
     <Footer/>
    </>
  );
}

export default App;
