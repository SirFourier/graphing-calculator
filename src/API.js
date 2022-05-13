// using the openweathermap.org API
// this contains constants and methods to interface with the response from the API

const buildQuery = (query) => {
  const ROOT = "https://api.openweathermap.org/data/2.5/";
  const KEY = "5d5c88002278a4fbef29d7752e855e0e";
  return `${ROOT}${query}&appid=${KEY}`;
};

const LOCATE_BY = {
  CITY: "city",
  COORDINATES: "coordinates",
};

const UNITS = {
  METRIC: "metric",
  IMPERIAL: "imperial",
};

const QUERY_BY = {
  city: (name) => `q=${name}`,
  coordinates: (lat, lon) => `lat=${lat}&lon=${lon}`,
};

// current weather data
const getCurrentData = async (type, ...values) => {
  const SELECTION = "weather?";
  const LOCATION = QUERY_BY[type](...values);
  const QUERY = buildQuery(`${SELECTION}${LOCATION}`);

  const response = await fetch(QUERY);
  const data = await response.json();

  // create single source of reformatted data
  const reformatted = {
    OK: data?.cod === 200,
    city: data?.name,
    coords: data?.coord,
    country: data?.sys?.country,
    temp: data?.main?.temp,
    status: [data?.cod, data?.message],
  };

  if (!reformatted.OK) {
    const [code, msg] = reformatted.status;
    throw new Error(`Error: ${code}, Message: ${msg}`);
  } else {
    return reformatted;
  }
};

// one call weather data
const getOneCallData = async (type, ...values) => {
  const currentData = await getCurrentData(type, ...values);
  let coordinates = values;

  switch (type) {
    case LOCATE_BY.CITY:
      const { lat, lon } = currentData.coords;
      coordinates = [lat, lon];
      break;
    case LOCATE_BY.COORDINATES:
      // dont do anything (just checking if it "coordinates" type is used)
      break;
    default:
      throw new Error("Query type not available");
  }

  const SELECTION = "onecall?";
  const EXCLUDE = ["minutely", "hourly"];
  // one call api can only be called by coordinates
  const LOCATION = QUERY_BY[LOCATE_BY.COORDINATES](...coordinates);
  const QUERY = buildQuery(
    `${SELECTION}${LOCATION}&exclude=${EXCLUDE.join(",")}`
  );

  const response = await fetch(QUERY);
  const oneCallData = await response.json();

  // return combined data call
  return { ...oneCallData, ...currentData };
};

export { LOCATE_BY, UNITS, getCurrentData, getOneCallData };

// London: 51.509865, -0.118092
