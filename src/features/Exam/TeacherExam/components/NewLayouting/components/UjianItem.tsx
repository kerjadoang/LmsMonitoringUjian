import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { wp } from "../helpers/screenSizes";
import { fonts } from "../helpers/fonts";

export type UjianItemProps = {
    chip1?: string | undefined,
    chip2?: string | undefined,
    label: string,
    subLabel: string,
    createdAt: string,
    onPressDetail: () => void,
    onPressOption?: () => void
}

export default function UjianItem({
    chip1,
    chip2,
    label,
    subLabel,
    createdAt,
    onPressDetail,
    onPressOption
}: UjianItemProps) {
    return (
        <View style={{ paddingHorizontal: wp(1) }}>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.chipContainer}>
                        {chip1 && <Text style={styles.chipItem}>{chip1}</Text>}
                        {chip2 && <Text style={styles.chipItem}>{chip2}</Text>}
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={onPressDetail}>
                            <Image source={require("../assets/icons/eye.png")} style={{ flex: 1 }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={onPressOption}>
                            <Image source={require("../assets/icons/option.png")} style={{ flex: 1 }} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ paddingHorizontal: wp(2) }}>
                    <Text style={styles.subLabel}>{subLabel}</Text>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.createdLabel}>Dibuat</Text>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        <Image source={require("../assets/icons/calendar.png")} style={styles.calendarIcon} resizeMode="contain" />
                        <Text style={styles.createdAt}>{createdAt}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.light,
        padding: wp(3),
        borderRadius: wp(2),
        elevation: 3,
        marginTop: wp(1),
        marginBottom: wp(2)
    },
    chipContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    chipItem: {
        fontSize: wp(3),
        fontFamily: fonts.Regular,
        color: appColors.primary,
        backgroundColor: appColors.info,
        paddingHorizontal: wp(2),
        paddingVertical: wp(.6),
        borderRadius: wp(100),
        margin: wp(1)
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
    subLabel: {
        fontFamily: fonts.Regular,
        color: appColors.darkGrey,
        fontSize: wp(3)
    },
    label: {
        fontFamily: fonts.Bold,
        color: appColors.dark,
        fontSize: wp(3.8)
    },
    createdLabel: {
        fontFamily: fonts.Regular,
        color: appColors.grey,
        fontSize: wp(3)
    },
    calendarIcon: {
        height: wp(3),
        width: wp(3),
        marginRight: wp(1),
        marginTop: wp(.3)
    },
    createdAt: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3),
    }
})