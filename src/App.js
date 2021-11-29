import './App.css';
import styled from 'styled-components';
import Header from "./containers/Header.jsx";
import Navbar from './components/Navbar.jsx';
import Brand from './components/Brand.jsx';
import WhatGPT3 from './containers/WhatGPT3.jsx';
import Features from './containers/Features.jsx';
import Possibility from './containers/Possibility.jsx';
import Footer from './containers/Footer.jsx';
import Cta from './components/Cta.jsx';
import Blog from './containers/Blog.jsx';

function App() {
  return (
    <>
      <Container>
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div``



