import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";
import { wp } from "../helpers/screenSizes";
import { ButtonPrimary } from "./Button";
import { styles } from "../style";

export type SectionMonitoringStatusItemProps = {
    photo: ImageSourcePropType;
    name: string;
    joinAt: string;
    foul: string | number;
    progressLabel: string;
    progressPercent: number;
};

export default function SectionMonitoringStatusItem({
    photo,
    name,
    joinAt,
    foul,
    progressLabel,
    progressPercent,
}: SectionMonitoringStatusItemProps) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <View style={styles.monitoringStatusContainer}>
            <View style={styles.monitoringStatusRow}>
                <Image source={photo} style={styles.monitoringStatusPhoto} resizeMode="contain" />
                <View style={styles.monitoringStatusNameContainer}>
                    <Text style={styles.monitoringStatusTitle} numberOfLines={1}>
                        {name}
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.monitoringStatusBtnAction}
                    onPress={() => setShowDetail(!showDetail)}
                >
                    <Image
                        source={require("../assets/icons/arrow-down.png")}
                        style={[
                            styles.monitoringStatusArrowIcon,
                            showDetail ? styles.monitoringStatusIconRotated : styles.monitoringStatusIconDefault,
                        ]}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            {showDetail && (
                <View style={styles.monitoringStatusDetailContainer}>
                    <Text style={styles.monitoringStatusDetailTextNoPaddingBottom}>
                        Bergabung : {joinAt}
                    </Text>
                    <Text style={styles.monitoringStatusDetailTextFoul}>
                        Pelanggaran : {foul}
                    </Text>
                    <View style={styles.monitoringStatusProgressRow}>
                        <Text style={styles.monitoringStatusDetailTextNoPaddingTop}>
                            {progressLabel} :
                        </Text>
                        <View style={styles.monitoringStatusProgressContainer}>
                            <View
                                style={[
                                    styles.monitoringStatusProgressBar,
                                    { flex: (progressPercent ?? 0) / 100 },
                                ]}
                            />
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

