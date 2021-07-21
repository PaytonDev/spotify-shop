import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    widgetContainer: {
        height: 230,
        marginRight: 15,
        marginTop: 10,
        alignItems:"stretch",
        width: 202
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: 200,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(255,255,255,0.3)",
    },
    descriptionContainer: {
        backgroundColor: "rgba(255,255,255,0.3)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"stretch",
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        width: 200,
    },
    itemNameContainer: {
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "white",
        paddingRight: 5,
        width: 180,
        height: 60,
    },
    iconContainer: {
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    sourceNameContainer: {
        justifyContent: "flex-end",
        marginBottom: 5,
    },
    blurContainer: {

    },
    itemName: {
        fontWeight: "bold",
        textAlign: "left",
        marginTop: 5,
        color: "white"
    },
    image: {
        height: 198,
        width: 198,
    },
    sourceName: {
        textAlign: "left",
        color: "white"
    },
    icon: {
        color: "white",
    },
    
})

export default styles;