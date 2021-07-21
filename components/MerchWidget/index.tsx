import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur'

export type MerchWidgetProps = {
    image: string;
    price: number;
    itemName: string;
    sourceName: string;
    sourceUri: string;
}

const MerchWidget = (props: MerchWidgetProps) => {
    return (
        <View style={styles.widgetContainer}>
            <View style={styles.imageContainer}>
                <BlurView tint='light' intensity={20} style={styles.blurContainer}>
                    <Image source={{uri: props.image}} style={styles.image}></Image>
                </BlurView>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.itemNameContainer}>
                    <Text style={styles.itemName}>{props.itemName}</Text>
                    <View style={styles.sourceNameContainer}>
                        <Text style={styles.sourceName}>{props.sourceName}</Text>
                    </View>
                </View>
                {/* <View style={styles.iconContainer}>
                    <AntDesign name="shoppingcart" size={30} style={styles.icon} />
                </View> */}
            </View>
        </View>
    )
}

export default MerchWidget;