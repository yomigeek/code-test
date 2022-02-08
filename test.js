const inputString = "417427194451417";
const dictionary = ["94451"];

const getCombinations = (inputString, dictionary) => {
  let list = [];
  if (dictionary.length > 0) {
    dictionary.forEach((item) => {
      const splittedItem = inputString.split(item);
      console.log(splittedItem, "splittt");
      const joinedItems = splittedItem.join(":");
      list.push(joinedItems);
    });
  }

  return list;
};

const result = getCombinations(inputString, dictionary);

console.log(result);

// Task 2

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

// Task 5
// Code review
// Line 7 : I think you meant to name the function CarsFuel instead of CarsFuuel
// Line 12 : It's better to destructure fuel from props e.g const { fuel } = props, to avoid repetition
// Line 15: Can you add a dependency array to the useEffect to avoid a continous render on the react page, and I
// believe the fuel variable should be added to dependency array

// Task 4
const handleResult = (state, message = null) => {
  let result;
  if (state === "success") {
    result = {
      title: "Order complete",
      message
    };
  }
  if (state === "error") {
    switch (message) {
      case "NO_STOCK":
        message = "No stock has been found";
        break;
      case "INCORRECT_DETAILS":
        message = "Incorrect details have been entered";
        break;
      case null:
        message = null;
        break;
      case undefined:
        message = undefined;
        break;
      default:
        message = null;
        break;
    }
    result = { title: "Error page", message };
  }
  console.log(result);
};

const getOutput = (values) => {
  if (values.length > 0) {
    for (let i = 0; i < values.length; i++) {
      if (values[i].state === "processing") {
        setTimeout(() => {
          const nextValue = values[i + 1];
          if (nextValue.state === "success" || "error") {
            const message = nextValue.errorCode ? nextValue.errorCode : null;
            handleResult(nextValue.state, message);
          }
        }, 2000);
      } else {
        return "";
      }
    }
  } else {
    return {};
  }
};

console.log(getOutput([{ state: "processing" }, { state: "success" }]));
