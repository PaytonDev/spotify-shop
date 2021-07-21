import React from "react";
import { Image, Text, View } from 'react-native'
import { AlbumInfo } from "../../types";
import styles from "./styles";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons/";


export type AlbumScreenHeaderProps = {
    album: AlbumInfo;
}

const AlbumScreenHeader = (props: AlbumScreenHeaderProps) => {
    const album = props.album
    const bullet = '\u2022'
    return (
        <View style={styles.container}>
            <Image source={{uri: album.imageUri}} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{album.name}</Text>
                <Text style={styles.artist}>{album.by}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.albumYear}>Album {bullet} 2021</Text>
                <View style={styles.iconContainer}>
                    <View style={styles.leftIconContainer}>
                        <AntDesign name='hearto' size={25} style={styles.icon} />
                        <Ionicons name='download-outline' size={25} style={styles.download} />
                        <Ionicons name='ellipsis-vertical' size={25} style={styles.icon} />
                    </View>
                    <View style={styles.playButtonContainer}>
                        <Ionicons name='md-play-circle-sharp' size={60} style={styles.playButton} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AlbumScreenHeader;