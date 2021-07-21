import React, { useState } from "react";
import { Text, View, Image, FlatList } from 'react-native'
import favInfo from "../../data/favInfo";
import { Merch } from '../../types';
import styles from "./styles";
import MerchWidget from "../MerchWidget";

export type MerchWidgetSeletProps = {
    merch: Merch
}

const MerchWidgetSelect = (props:MerchWidgetSeletProps) => {
    const selMerch = props.merch

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Merch</Text>
            <FlatList 
                data={selMerch}
                renderItem={({item}) => 
                <MerchWidget
                    image={item.image}
                    price={item.price}
                    itemName={item.itemName}
                    sourceName={item.sourceName}
                    sourceUri={item.sourceURI}
                    />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default MerchWidgetSelect