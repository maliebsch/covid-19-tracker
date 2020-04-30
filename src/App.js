import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImg from './images/corona.png';

class App extends Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  changeOfCountryHandler = async (country) => {
    const fetchedCountryData = await fetchData(country);
    this.setState({ data: fetchedCountryData, country });
  };
  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImg} alt="corona-virus" className={styles.coronaImg} />
        <Cards data={data} />
        <CountryPicker changeOfCountryHandler={this.changeOfCountryHandler} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
