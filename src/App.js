import React from "react";
import styles from './App.module.css'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers/index'
import {Cta, Brand, Navbar} from './components/index'


function App() {
  return (
    <div className={styles.App}>
      <div className={styles.gradientBg}>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
