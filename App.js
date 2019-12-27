import React from 'react';
import{Alert} from 'react-native';
import Loading from "./Loading";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "f4787906cc193a3ba0fd034bcdaad2e8";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({isLoading:false, condition: data.weather[0].main, temp: data.main.temp, country: data.name, time: data.timezone});
    }

  getLocation = async() => {
    try {
      const {status} = await Permissions.askAsync(Permissions.LOCATION);
      if (status === "granted") {
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        this.getWeather(latitude, longitude);
        //send to API and get weather
      } else {
        Alert.alert("Permission does not granted", "So sad");
      }
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render(){
    const {isLoading, condition, temp, country, time} = this.state;
   return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} country={country} time={time}/>;
  } 
}
