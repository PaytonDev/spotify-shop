import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: "white"
    },
    infoContainer: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        alignItems:"stretch"
    },
    textContainer: {
        width: Dimensions.get('window').width,
        alignItems:"stretch",
        marginLeft: 25,
    },
    iconContainer: {
        flexDirection: "row",
        width: Dimensions.get('window').width,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    leftIconContainer: {
        flexDirection: "row"
    },
    playButtonContainer: {
        marginRight: 15
    },
    image: {
        height: 225,
        width: 225,
        marginBottom: 20,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 10,
    },
    artist: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5
    },
    albumYear: {
        color: "lightgray",
        fontSize: 14,
    },
    icon: {
        color: "lightgray",
        marginRight: 20,
    },
    download: {
        color: "lightgray",
        marginRight: 12
    },
    playButton: {
        color: "#1db954",
        
        alignSelf: "stretch"
    }
})

export default styles;