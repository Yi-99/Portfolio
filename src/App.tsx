import {
  Header,
  Hero,
  About,
  Expertise,
  Journey,
  SelectedWorks,
  Contact,
  ScrollToTop
} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Journey />
      <SelectedWorks />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
