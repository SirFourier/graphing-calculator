// using openweathermap.org
// this contains constants and methods to interface with the API

const API = {
  ROOT: "https://api.openweathermap.org/data/2.5/weather?",
  KEY: "5d5c88002278a4fbef29d7752e855e0e",
  UNITS: "metric",
  queryFormat(format) {
    return `${this.ROOT}${format}&appid=${this.KEY}&units=${this.UNITS}`;
  },
  queryBy(type, query) {
    switch (type) {
      case "city":
        const city = query.city;
        return this.queryFormat(`q=${city.name}`);
      case "coordinates":
        const coordinates = query.coordinates;
        const { latitude, longitude } = coordinates;
        return this.queryFormat(`lat=${latitude}&lon=${longitude}`);
      default:
        console.log("Query type not available");
    }
  },
  isOK: (data) => data.cod === 200,
  getCity: (data) => data.name,
  getCountry: (data) => data.sys.country,
  getTemp: (data) => data.main.temp,
  getStatus: ({ cod, message }) =>
    cod >= 400 && cod <= 599 ? `Error: ${cod}, Message: ${message}` : "",
};

export default API;

// london
// lat: 51.509865
// lon: -0.118092
