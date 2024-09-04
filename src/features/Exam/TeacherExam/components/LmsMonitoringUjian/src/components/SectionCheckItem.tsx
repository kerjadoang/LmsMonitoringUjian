import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";
import { wp } from "../helpers/screenSizes";
import { ButtonPrimary } from "./Button";
import { styles } from "../style";

export type SectionCheckItemProps = {
    photo: ImageSourcePropType;
    name: string;
    collection: string;
    onPressPeriksa?: () => void;
};

export default function SectionCheckItem({ photo, name, collection, onPressPeriksa }: SectionCheckItemProps) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <View style={styles.sectionCheckContainer}>
            <View style={styles.sectionCheckRowContainer}>
                <Image source={photo} style={styles.sectionCheckPhoto} resizeMode="contain" />
                <View style={styles.sectionCheckTextContainer}>
                    <Text style={[styles.sectionCheckTitle, styles.sectionCheckTitleDark]} numberOfLines={1}>
                        {name}
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.sectionCheckBtnAction}
                    onPress={() => setShowDetail(!showDetail)}
                >
                    <Image
                        source={require("../assets/icons/arrow-down.svg")}
                        style={[
                            styles.sectionCheckArrowImage,
                            { transform: [{ rotateX: showDetail ? "180deg" : "0deg" }] },
                        ]}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            {showDetail && (
                <View style={styles.sectionCheckDetailContainer}>
                    <Text style={styles.sectionCheckDetailText}>
                        Waktu mengumpulkan : {collection}
                    </Text>
                    <ButtonPrimary rounded onPress={onPressPeriksa}>
                        Periksa
                    </ButtonPrimary>
                </View>
            )}
        </View>
    );
}


