import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react'
import Header from './components/Headers'
import Summary from './components/Summary'
import FirstAccordion from './components/FirstUsedAccordion'
import UnusedAccordion from './components/UnusedAccordion'
import SecondAccordion from './components/SecondUsedAccordion';
// import SecondBar from './components/SecondBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Summary />
        <Container>
          <FirstAccordion />
          <UnusedAccordion title="Hitung Jenis" />
          <UnusedAccordion title="MVC,MCH,MCHC" />
          <SecondAccordion />
          {/* <SecondBar bar1="10%" bar2="5%" bar3="10%"/> */}
        </Container>
      </div>
    );
  }
}

export default App;
