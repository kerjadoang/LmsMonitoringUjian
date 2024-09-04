import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { wp } from "../helpers/screenSizes";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";

export default function TabItem({ title, active, onPress }: {
    title: string,
    active: boolean,
    onPress: () => void
}) {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.btnContainer} onPress={onPress}>
            <Text style={[styles.label, {
                color: active ? appColors.primary : appColors.darkGrey
            }]}>
                {title}
            </Text>
            <View style={[styles.statusTab, {
                backgroundColor: active ? appColors.primary : appColors.default,
            }]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
    },
    label: {
        textAlign: "center",
        fontSize: wp(3.5),
        fontFamily: fonts.SemiBold,
        padding: wp(2),
    },
    statusTab: {
        height: wp(.7),
        borderTopLeftRadius: wp(1),
        borderTopRightRadius: wp(1),
    }
})