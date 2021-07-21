import React, {useState} from 'react'
import { View, FlatList, Text, TouchableOpacity} from 'react-native'
import ArtistAvatar from '../ArtistAvatar'
import favInfo from '../../data/favInfo'
import styles from './styles'

export type ArtistAvatarSelectProps = {
    artist: typeof favInfo.artist
    selectArtist: (event:number) => void
}


const ArtistAvatarSelect = (props:ArtistAvatarSelectProps) => {

    const artist = props.artist

    return (
        <View style={styles.container}>
            <FlatList 
                data={artist}
                renderItem={({item, index}) => 
                    <TouchableOpacity onPress={() => props.selectArtist(index)}>
                        <ArtistAvatar 
                            image={item.avatar} 
                            id={item.id} 
                        />
                    </TouchableOpacity>}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default ArtistAvatarSelect