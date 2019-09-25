const initState = {
  weatherData: null,
  location: '',
  showLoader: false,
  error: '',
};

export default (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case 'SET_WEATHER_DATA':
      return { ...state, weatherData: action.weatherData };
    case 'SET_LOCATION':
      return { ...state, location: action.location };
    case 'TOGGLE_LOADING_INDICATOR':
      return { ...state, showLoader: action.showLoader };
    case 'SHOW_ERROR':
      return { ...state, error: action.error };
    case 'CLEAR_ERROR':
      return { ...state, error: '' };
    default:
      return state;
  }
};
