import React from 'react';
import Feature from '../../components/featured/Feature_Index';
import Header from '../../components/header/Header_Index';
import Navbar from '../../components/navbar/Navbar_Index';
import './Home_Style.scss';
const Home_Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home_container">
        <Feature />
      </div>
    </div>
  );
};

export default Home_Index;
