import {
  Header,
  Hero,
  About,
  Expertise,
  Journey,
  SelectedWorks,
  Thoughts,
  Contact,
  ScrollToTop
} from './components';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Expertise />
    <Journey />
    <SelectedWorks />
    <Contact />
  </>
);

// Thoughts page component
const ThoughtsPage = () => (
  <>
    <Thoughts />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thoughts" element={<ThoughtsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
