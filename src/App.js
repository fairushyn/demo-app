import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;