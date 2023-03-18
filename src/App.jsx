import React, { Component } from 'react';
import { Header } from './lawout/Header';
import { Footer } from './lawout/Footer';
import { Main } from './lawout/Main';

class App extends Component {
  render() {
    return <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  }
}

export default App;
