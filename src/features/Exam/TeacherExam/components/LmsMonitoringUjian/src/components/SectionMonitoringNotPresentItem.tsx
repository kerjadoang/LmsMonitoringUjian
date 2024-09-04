import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";
import { wp } from "../helpers/screenSizes";
import { ButtonPrimary } from "./Button";

export type SectionMonitoringNotPresentItemItemProps = {
    photo: ImageSourcePropType;
    name: string;
    phone: string | number;
    email: string;
};

export default function SectionMonitoringNotPresentItemItem({ photo, name, phone, email }: SectionMonitoringNotPresentItemItemProps) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <View style={styles.monitoringNotPresentContainer}>
            <View style={styles.monitoringNotPresentRow}>
                <Image source={photo} style={styles.monitoringNotPresentPhoto} resizeMode="contain" />
                <View style={styles.monitoringNotPresentNameContainer}>
                    <Text style={styles.monitoringNotPresentName} numberOfLines={1}>
                        {name}
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.monitoringNotPresentBtnAction}
                    onPress={() => setShowDetail(!showDetail)}
                >
                    <Image
                        source={require("../assets/icons/arrow-down.png")}
                        style={[
                            styles.monitoringNotPresentArrowIcon,
                            showDetail ? styles.monitoringNotPresentIconRotated : styles.monitoringNotPresentIconDefault,
                        ]}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            {showDetail && (
                <View style={styles.monitoringNotPresentDetailContainer}>
                    <Text style={styles.monitoringNotPresentDetailTextNoPaddingBottom}>
                        Nomor Kontak : {phone}
                    </Text>
                    <Text style={styles.monitoringNotPresentDetailTextNoPaddingTop}>
                        Email : {email}
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    monitoringNotPresentContainer: {
        borderTopWidth: 1,
        borderTopColor: appColors.lightGrey,
        paddingVertical: wp(2),
    },
    monitoringNotPresentRow: {
        flexDirection: "row",
    },
    monitoringNotPresentNameContainer: {
        flex: 1,
        paddingHorizontal: wp(1),
    },
    monitoringNotPresentPhoto: {
        height: wp(5),
        width: wp(5),
    },
    monitoringNotPresentName: {
        fontFamily: fonts.Bold,
        fontSize: wp(3.5),
        color: appColors.dark,
    },
    monitoringNotPresentBtnAction: {
        borderRadius: wp(100),
        padding: wp(1),
        height: wp(6),
        width: wp(6),
        backgroundColor: appColors.info,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp(2),
    },
    monitoringNotPresentArrowIcon: {
        flex: 1,
    },
    monitoringNotPresentIconRotated: {
        transform: [{ rotateX: "180deg" }],
    },
    monitoringNotPresentIconDefault: {
        transform: [{ rotateX: "0deg" }],
    },
    monitoringNotPresentDetailContainer: {
        paddingHorizontal: wp(3),
    },
    monitoringNotPresentDetailText: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingVertical: wp(2),
    },
    monitoringNotPresentDetailTextNoPaddingBottom: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingBottom: 0,
    },
    monitoringNotPresentDetailTextNoPaddingTop: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingTop: 0,
    },
});
