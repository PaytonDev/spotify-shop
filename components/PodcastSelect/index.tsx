import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { PodcastInfo } from '../../types'
import Podcast from '../Podcast'
import styles from './styles'

export type PodcastSelectProps = {
    podcast: PodcastInfo[];
    name: string;
}

const PodcastSelect = (props: PodcastSelectProps) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Podcasts Feat. {props.name}</Text>
        <FlatList 
            data={props.podcast}
            renderItem={({ item }) => <Podcast podcast={item} />}
            keyExtractor = {(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
    )
}

export default PodcastSelect;