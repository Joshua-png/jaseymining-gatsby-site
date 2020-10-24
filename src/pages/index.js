import React from 'react';
// import './App.css';
import '../components/style.css';
import '../components/owl.carousel.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousels from '../components/Carousel/Carousel';
import Body from '../components/Body/Body';
import Layout from '../components/layout/layout';


function Home() {
  return (
    <React.Fragment>
       <Layout />
       <Carousels />
       <Body />  
    </React.Fragment>
    
  );
}

export default Home;
