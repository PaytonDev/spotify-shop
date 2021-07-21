import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from "./styles"
import { AlbumInfo } from "../../types"
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
    album: AlbumInfo
}

const Album = (props: AlbumProps) => {

    const navigation = useNavigation()

    const handleOnPress = () => {
        navigation.navigate('AlbumScreen', {id: props.album.id})
    }

    return (
        <TouchableWithoutFeedback onPress={handleOnPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image}/>
                <Text style={styles.text}>{props.album.aritistHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Album;