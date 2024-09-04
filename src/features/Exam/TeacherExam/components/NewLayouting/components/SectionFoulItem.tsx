import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";
import { wp } from "../helpers/screenSizes";
import { ButtonPrimary } from "./Button";

export type SectionFoulItemProps = {
    photo: ImageSourcePropType,
    name: string,
    collection: string | number,
    onPressUnduh?: () => void
}

export default function SectionFoulItem({ photo, name, collection, onPressUnduh }: SectionFoulItemProps) {
    const [showDetail, setShowDetail] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Image source={photo} style={styles.photo} resizeMode="contain" />
                <View style={{ flex: 1, paddingHorizontal: wp(1) }}>
                    <Text style={[styles.title, { color: appColors.dark }]} numberOfLines={1}>{name}</Text>
                </View>
                <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={() => setShowDetail(!showDetail)}>
                    <Image source={require("../assets/icons/arrow-down.png")} style={{ flex: 1, transform: [{ rotateX: showDetail ? "180deg" : "0deg" }] }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            {showDetail && (
                <View style={{ paddingHorizontal: wp(3) }}>
                    <Text style={styles.detailText}>Jumlah Pelanggaran    :    <Text style={styles.collection}>{collection}</Text></Text>
                    <ButtonPrimary rounded bordered onPress={onPressUnduh}>
                        Unduh
                    </ButtonPrimary>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: appColors.lightGrey,
        paddingVertical: wp(2)
    },
    photo: {
        height: wp(5),
        width: wp(5)
    },
    title: {
        fontFamily: fonts.Bold,
        fontSize: wp(3.5),
        color: appColors.primary
    },
    btnAction: {
        borderRadius: wp(100),
        padding: wp(1),
        height: wp(6),
        width: wp(6),
        backgroundColor: appColors.info,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp(2)
    },
    detailText: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingVertical: wp(2)
    },
    collection: {
        color: 'darkred',
        fontFamily: fonts.Bold
    }
})