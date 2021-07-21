import React from "react";
import { Text, Image, View } from "react-native"
import styles from "./styles";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons/";

const song = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
    uri: ''
  }

const PlayerWidget = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.songInfo}>
                <Image source={{uri: song.imageUri}} style={styles.image} />
                <View style={styles.leftContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
                <View style={styles.icons}>
                    <Feather name='speaker' size={25} style={styles.icon} />
                    <AntDesign name='hearto' size={25} style={styles.icon} />
                    <Ionicons name='play-sharp' size={25} style={styles.icon} />
                </View>
        </View>
    )
}

export default PlayerWidget;