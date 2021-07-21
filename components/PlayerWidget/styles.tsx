import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#181818",
        position: "absolute",
        bottom: 24,
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: 60,
        marginBottom: 25
    },
    songInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    leftContainer: {
        justifyContent: "space-around",
        marginLeft: 15,
        textAlign: "left",
    },
    image: {
        width: 50,
        height: 50
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: -0.5
    },
    artist: {
        color: 'lightgray',
        fontSize: 16
    },
    icon: {
        color: "grey",
        textAlign: "right",
        marginLeft: 18
    },
    icons: {
        paddingRight: 10,
        flexDirection: "row"
    }
})

export default styles