import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { PodcastInfo } from "../../types";
import styles from "./styles"

export type PodcastProps = {
    podcast: PodcastInfo
}

const Podcast = (props: PodcastProps) => {

    const podcast = props.podcast

    return (
        <View style={styles.container}>
            <Image source={{ uri: podcast.image }} style={styles.image}/>
            <Text style={styles.text}>{podcast.episodeName}</Text>
        </View>
    )
}

export default Podcast