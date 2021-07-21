import React from "react";
import { Text, View } from "react-native"
import styles from "./styles";



export type TourDatesWidgetProp = {
    dateDay: string;
    dateMonth: string;
    dateDate: string;
    dateTime: string;
    city: string;
    venue: string;
}

const TourDatesWidget = (props: TourDatesWidgetProp) => {
    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <View style={styles.dateMonthContainer}>
                    <Text style={styles.dateMonth}>{props.dateMonth}</Text>
                </View>
                <View style={styles.dateDateContainer}>
                    <View>
                        <Text style={styles.dateDate}>{props.dateDate}</Text>
                    </View>
                </View>
            </View>
                <View style={styles.leftContainer}>
                        <Text style={styles.venue}>{props.venue}</Text>
                        <Text style={styles.dateDayTimeCity}>{props.dateDay}, {props.dateTime} {props.city}</Text>
                </View>
        </View>
    )
}

export default TourDatesWidget