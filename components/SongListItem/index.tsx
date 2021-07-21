import React from "react";
import { Text, Image, View } from "react-native"
import styles from "./styles";
import { Song } from "../../types";
import { Ionicons } from "@expo/vector-icons/";


export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { song } = props
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.Artist}</Text>
            </View>
                
                <Ionicons name='ellipsis-vertical' size={25} style={styles.icon} />
        </View>
    )
}

export default SongListItem;