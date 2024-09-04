import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";
import { wp } from "../helpers/screenSizes";
import { ButtonPrimary } from "./Button";
import { styles } from "../style";

export type SectionMonitoringDoneItemProps = {
    photo: ImageSourcePropType;
    name: string;
    timeCollect: string;
    duration: string;
    onPressPeriksa?: () => void;
    joinAt?: string;
};

export default function SectionMonitoringDoneItem({ photo, name, timeCollect, duration, onPressPeriksa }: SectionMonitoringDoneItemProps) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <View style={styles.monitoringDoneContainer}>
            <View style={styles.monitoringDoneRow}>
                <Image source={photo} style={styles.monitoringDonePhoto} resizeMode="contain" />
                <View style={styles.monitoringDoneNameContainer}>
                    <Text style={styles.monitoringDoneName} numberOfLines={1}>
                        {name}
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.monitoringDoneBtnAction}
                    onPress={() => setShowDetail(!showDetail)}
                >
                    <Image
                        source={require("../assets/icons/arrow-down.svg")}
                        style={[
                            styles.monitoringDoneArrowIcon,
                            showDetail ? styles.monitoringDoneIconRotated : styles.monitoringDoneIconDefault,
                        ]}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            {showDetail && (
                <View style={styles.monitoringDoneDetailContainer}>
                    <Text style={styles.monitoringDoneDetailTextNoPaddingBottom}>
                        Waktu mengumpulkan : {timeCollect}
                    </Text>
                    <Text style={styles.monitoringDoneDetailTextNoPaddingTop}>
                        Durasi Pengerjaan : {duration}
                    </Text>
                    <ButtonPrimary rounded onPress={onPressPeriksa}>
                        Periksa
                    </ButtonPrimary>
                </View>
            )}
        </View>
    );
}

