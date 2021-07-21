import React from "react";
import { Text, View } from "react-native"
import TourDatesWidget from "../TourDatesWidget";
import styles from "./styles";



export type TourDatesProp = {
    tourDate: {
        dateDay: string;
        dateMonth: string;
        dateDate: string;
        dateTime: string;
        city: string;
        venue: string;
    }[];
}

const TourDates = (props:TourDatesProp) => {
    const tourDate = props.tourDate
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tour</Text>
            <TourDatesWidget
                 dateDate= {tourDate[0].dateDate}
                 dateMonth= {tourDate[0].dateMonth}
                 dateDay= {tourDate[0].dateDay}
                 dateTime= {tourDate[0].dateTime}
                 city={tourDate[0].city}
                 venue={tourDate[0].venue}
                 />
        </View>
    )
}

export default TourDates