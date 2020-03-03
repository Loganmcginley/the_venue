import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", position: 'relative', background: 'cornflowerblue' }}>
        <Header
          class="grid-row: 1/3"
          class="grid-column: 1/-1"
        />

        <Element name="featured"
          class="grid-row: 1/3"
          class="grid-column: 1/-1"
        >
          <Featured />
        </Element>

        <Element name="venuenfo">
          <VenueNfo
            class="grid-row: 3/4"
            class="grid-column: 1/-1"
          />
        </Element>

        <Element name="highlights">
          <Highlight />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />

      </div >
    );
  }
}

export default App;

