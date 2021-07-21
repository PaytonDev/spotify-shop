import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 385,
        marginBottom: 25
    },
    leftContainer: {
        justifyContent: "space-around",
        marginLeft: 15,
        textAlign: "left",
    },
    image: {
        width: 75,
        height: 75
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    artist: {
        color: 'lightgray',
        fontSize: 16
    },
    icon: {
        color: "grey",
        textAlign: "right",
    }
})

export default styles