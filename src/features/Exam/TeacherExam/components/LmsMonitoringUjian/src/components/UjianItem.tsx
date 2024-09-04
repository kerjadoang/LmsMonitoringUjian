import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { wp } from "../helpers/screenSizes";
import { fonts } from "../helpers/fonts";
import { styles} from "../style";

export type UjianItemProps = {
    chip1?: string | undefined;
    chip2?: string | undefined;
    label: string;
    subLabel: string;
    createdAt: string;
    onPressDetail: () => void;
    onPressOption?: () => void;
};

export default function UjianItem({
    chip1,
    chip2,
    label,
    subLabel,
    createdAt,
    onPressDetail,
    onPressOption,
}: UjianItemProps) {
    return (
        <View style={styles.ujianItemOuterContainer}>
            <View style={styles.ujianItemContainer}>
                <View style={styles.ujianItemRow}>
                    <View style={styles.ujianItemChipContainer}>
                        {chip1 && <Text style={styles.ujianItemChipItem}>{chip1}</Text>}
                        {chip2 && <Text style={styles.ujianItemChipItem}>{chip2}</Text>}
                    </View>
                    <View style={styles.ujianItemRow}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.ujianItemBtnAction}
                            onPress={onPressDetail}
                        >
                            <Image
                                source={require("../assets/icons/eye.svg")}
                                style={styles.ujianItemIcon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.ujianItemBtnAction}
                            onPress={onPressOption}
                        >
                            <Image
                                source={require("../assets/icons/option.svg")}
                                style={styles.ujianItemIcon}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.ujianItemDetailContainer}>
                    <Text style={styles.ujianItemSubLabel}>{subLabel}</Text>
                    <Text style={styles.ujianItemLabel}>{label}</Text>
                    <Text style={styles.ujianItemCreatedLabel}>Dibuat</Text>
                    <View style={styles.ujianItemRow}>
                        <Image
                            source={require("../assets/icons/calendar.svg")}
                            style={styles.ujianItemCalendarIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.ujianItemCreatedAt}>{createdAt}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}