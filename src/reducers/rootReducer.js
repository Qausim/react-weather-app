const initState = {
  weatherData: null,
  location: '',
};

export default (state = initState, action) => {
  const { type } = action;
  if (type === 'SET_WEATHER_DATA') {
    const { weatherData } = action;
    return { ...state, weatherData };
  }
  if (type === 'SET_LOCATION') {
    const { location } = action;
    return { ...state, location };
  }
  return state;
};
