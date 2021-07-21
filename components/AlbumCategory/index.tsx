import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { AlbumInfo } from "../../types"
import Album from '../Album'
import styles from './styles'



export type AlbumCategoryProps = {
    title: string,
    albums: AlbumInfo[],
}

const AlbumCategory = (props: AlbumCategoryProps) => (


    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <FlatList 
            data={props.albums}
            renderItem={({ item }) => <Album album={item} />}
            keyExtractor = {(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
)

export default AlbumCategory