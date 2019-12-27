import React from 'react';
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {

    Thunderstorm : {
        iconName : "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title : "",
        subtitle : ""
    },

    Drizzle : {
        iconName : "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title : "",
        subtitle : ""
    },
    Rain : {
        iconName : "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title : "",
        subtitle : ""
    },
    Snow : {
        iconName : "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title : "",
        subtitle : ""
    },
    Atmosphere: {
        iconName : "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title : "",
        subtitle : ""
    },
    Clear : {
        iconName : "weather-sunny",
        gradient: ["#FF7300","#FFF253"],
        title : "현재 날씨 맑음",
        subtitle : "저녁에는 쌀쌀해요."
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title : "",
        subtitle : ""
    },
    Haze : {
        iconName : "cloud-outline",
        gradient: ["#4DA0B0", "#D39D38"],
        title : "",
        subtitle : ""
    },
    Mist : {
        iconName : "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title : "",
        subtitle : ""
    }
}; 

export default function Weather({temp, condition, country, time}) {
 return (
    <LinearGradient 
     style={styles.container} 
     colors={weatherOptions[condition].gradient}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.helfContainer}>
            <MaterialCommunityIcons size={95} name={weatherOptions[condition].iconName} color="white" />
            <Text style={styles.temp}>{temp}º</Text>      
        </View>
        <View style={{...styles.helfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>  
        </View>
    </LinearGradient>
 );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp : {
        fontSize: 42,
        color:"white" 
    },
    helfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title : {
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        color : "white",
        fontSize : 24,
        fontWeight : "600"
    },
    textContainer: {
        paddingHorizontal : 20,
        alignItems : "flex-start"
    }
});