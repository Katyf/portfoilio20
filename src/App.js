import React from 'react';
import './App.css';
import {Comp1} from './components/comp1';
import Layout from "./components/layout";
import {Projects} from "./components/projects";
import {Contact} from "./components/contact";

function App() {
  return (
    <Layout>
      <Comp1/>
      <Projects/>
      <Contact/>
    </Layout>
  );
}

export default App;
