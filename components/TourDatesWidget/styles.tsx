import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        color: "white",
        height: 75,
    },
    dateContainer:{
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        borderColor: "black",
        borderWidth: 2,
    },
    callendarContainer: {

    },
    dateMonthContainer:{

    },
    dateDateContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    leftContainer:{
        marginLeft: 15,
        justifyContent: "center",
    },
    dateMonth:{
        color: "white",
        backgroundColor: "#9B0B0B",
        textAlign: "center",
        width: 60,
        fontWeight: 'bold'
    },
    dateDate:{
        color: "black",
        textAlign: "center",
        backgroundColor: "rgb(247, 247, 247)",
        width: 58,
        height: 35,
        fontWeight: 'bold',
        paddingTop: 3,
        fontSize: 22,
        borderLeftColor:"black",
        borderRightColor:"black"
    },
    venue:{
        color: "white",
        fontWeight: "700",
        fontSize: 18,
    },
    dateDayTimeCity:{
        color: "lightgray",
    },

})

export default styles;