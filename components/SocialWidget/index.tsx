// import React from "react";
// import { Text, View, Image } from "react-native";
// import styles from "./styles";
// import { Social } from "../../types";

// export type SocialWidgetProps = {
//     social: Social
// }

// const SocialWidget = (props: SocialWidgetProps) => {
//     return (
//         <View style={styles.widgetContainer}>
//             <View style={styles.imageContainer}>
//                 <Image source={{uri: props.image}} style={styles.image}></Image>
//             </View>
//             <View style={styles.descriptionContainer}>
//                 <View style={styles.itemNameContainer}>
//                     <Text style={styles.itemName}>{props.itemName}</Text>
//                     <View style={styles.sourceNameContainer}>
//                         <Text style={styles.sourceName}>{props.sourceName}</Text>
//                     </View>
//                 </View>
//                 <View style={styles.iconContainer}>
//                     <AntDesign name="shoppingcart" size={30} style={styles.icon} />
//                 </View>
//             </View>
//         </View>
//     )
// }