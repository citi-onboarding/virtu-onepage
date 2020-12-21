import {
  Testimonial, 
  Footer, 
  OurHistory, 
  NavBar,
  Banner,
  LinkedIn,
  OurServices,
  Contact,
} from './components';

function App() {
  return (
    <>
      <NavBar />
      <Banner/>
      <OurHistory />
      <OurServices/>
      <LinkedIn />
      <Testimonial />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
