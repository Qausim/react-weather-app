import setLocation from './setLocation';
import setWeatherData from './setWeatherData';

export default (inputLocation, clearLocation) => async (dispatch) => {
  try {
    const { results: [locationData] } = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${
      inputLocation}&key=d37f2c2cdcf64ab9a7e1f4c5536e8745`)
      .then((res) => res.json());

    const { formatted, geometry: { lat, lng } } = locationData;
    const location = formatted.replace(/[\s]*\d+/g, '');

    dispatch(setLocation(location));

    const {
      currently,
      hourly,
    } = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a092f224abf5f47ae470dce7d24bebea/${lat},${lng}`)
      .then((res) => res.json());

    dispatch(setWeatherData({ currently, hourly }));
    clearLocation();
  } catch (error) {
    console.log(error);
  }
};
