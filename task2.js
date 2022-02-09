class Provider {
    /**
     * Gets the weather for a given city
     */ static getWeather(city) {
      return Promise.resolve(`The weather of ${city} is Cloudy`);
    }
    /**
     * Gets the weather for a given city
     */ static getLocalCurrency(city) {
      return Promise.resolve(`The local currency of ${city} is GBP`);
    }
    /**
     * Given Longtitude and latitude, this function returns a city
     */
    static findCity(long, lat) {
      return Promise.resolve(`city located at ${lat}/${long} is London`);
    }
  }
  
  Provider.findCity(0.1278, 51.5074).then((res) => console.log(res));
  
  const weather = Provider.getWeather("London").then((res) => {
    console.log(res);
    return res;
  });
  
  const weatherAndCurrency = Provider.getLocalCurrency("London").then((res) => {
    weather.then((response) => console.log(`${response} . ${res}`));
  });