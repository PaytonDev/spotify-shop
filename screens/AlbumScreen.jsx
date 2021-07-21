import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import { View, Text } from "../components/Themed";
import SongListItem from "../components/SongListItem";
import { FlatList } from "react-native-gesture-handler";
import AlbumScreenHeader from "../components/AlbumScreenHeader";
import { getAlbum } from "../src/graphql/queries";

const AlbumScreen = () => {
    const route = useRoute()
    const albumId = route.params.id

    const [album, setAlbum] = useState(null)

    useEffect( () => {
  
  
    const fetchAlbumDetails = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getAlbum, {id: albumId}));
        setAlbum(data.data.getAlbum)
      } catch (e) {
        console.log(e)
      }
    }
    
    fetchAlbumDetails()
  }, [])

  if (!album) {
      return <Text>Loading...</Text>
  }
  

    return(
        <View style={styles.container}>
            <FlatList
                style={styles.songListContainer}
                data={album.songs.items}
                renderItem= {({item}) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => <AlbumScreenHeader album={album} />}
            />
        </View>
    )
}

export default AlbumScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    text: {
        color: 'white'
    },
    songListContainer: {
        marginBottom: 50,
    }
})