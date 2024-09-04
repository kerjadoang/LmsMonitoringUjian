import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";
import { wp } from "../helpers/screenSizes";
import { ButtonPrimary } from "./Button";
import { styles } from "../style";

export type SectionFoulItemProps = {
    photo: ImageSourcePropType;
    name: string;
    collection: string | number;
    onPressUnduh?: () => void;
};

export default function SectionFoulItem({ photo, name, collection, onPressUnduh }: SectionFoulItemProps) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <View style={styles.sectionFoulContainer}>
            <View style={styles.sectionFoulRow}>
                <Image source={photo} style={styles.sectionFoulPhoto} resizeMode="contain" />
                <View style={styles.sectionFoulNameContainer}>
                    <Text style={styles.sectionFoulName}>{name}</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.sectionFoulBtnAction}
                    onPress={() => setShowDetail(!showDetail)}
                >
                    <Image
                        source={require("../assets/icons/arrow-down.svg")}
                        style={[styles.sectionFoulArrowIcon, showDetail ? styles.sectionFoulIconRotated : styles.sectionFoulIconDefault]}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            {showDetail && (
                <View style={styles.sectionFoulDetailContainer}>
                    <Text style={styles.sectionFoulDetailText}>
                        Jumlah Pelanggaran : <Text style={styles.sectionFoulCollection}>{collection}</Text>
                    </Text>
                    <ButtonPrimary rounded bordered onPress={onPressUnduh}>
                        Unduh
                    </ButtonPrimary>
                </View>
            )}
        </View>
    );
}


