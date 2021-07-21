import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { API, graphqlOperation } from 'aws-amplify'
import { listAlbumCategories } from "../src/graphql/queries"
import ArtistAvatarSelect from '../components/ArtistAvatarSelect'
import MerchWidgetSelect from '../components/MerchWidgetSelect'
import TourDates from '../components/TourDatesSelect'
import PodcastSelect from '../components/PodcastSelect'
import favInfo from '../data/favInfo'


export default function StoreScreen () {
    const [currentArtist, setCurrentArtist] = useState(0)

    const handlePress = (curr: number) => {
        setCurrentArtist(curr)
    }

    let shownArtist = favInfo.artist[currentArtist]

    // useEffect( () => {


    //     const fetchAlbumCategories = async () => {
    //       try {
    //         const data = await API.graphql(graphqlOperation(listAlbumCategories));
    //         setCategories(data.data.listAlbumCategories.items)
    //       } catch (e) {
    //         console.log(e)
    //       }
    //     }
        
    //     fetchAlbumCategories()
    //   }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Spotify Store</Text>
                <ArtistAvatarSelect artist={favInfo.artist} selectArtist={handlePress}/>
                <MerchWidgetSelect merch={shownArtist.merch} />
                {shownArtist.tour.onTour
                    ? <TourDates tourDate={shownArtist.tour.tourDates} />
                    : null }
                {shownArtist.podcast.onPodcast
                    ? <PodcastSelect podcast={shownArtist.podcast.featPodcast} name={shownArtist.name}/>
                    : null }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        color: 'white',
        fontWeight: "bold",
        letterSpacing: -1,
        fontSize: 25,
        marginTop: 25,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 100,
    }
})