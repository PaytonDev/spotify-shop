import React from "react";
import { Image, View} from "react-native";
import styles from "./styles"

export type ArtistAvatarProps = {
    image: string;
    id: number;
}

const ArtistAvatar = (props: ArtistAvatarProps) => {
    return (
        <View>
            <View >
                <Image source={{uri: props.image}} style={styles.image}/>
            </View>
        </View>
    )
}

export default ArtistAvatar