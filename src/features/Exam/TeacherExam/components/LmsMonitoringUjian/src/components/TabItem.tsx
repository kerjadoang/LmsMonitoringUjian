import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { wp } from "../helpers/screenSizes";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";
import { styles } from "../style";

export default function TabItem({ title, active, onPress }: { 
    title: string; 
    active: boolean; 
    onPress: () => void; 
}) {
    return (
        <TouchableOpacity 
            activeOpacity={1} 
            style={styles.tabItemContainer} 
            onPress={onPress}
        >
            <Text style={[styles.tabItemLabel, active ? styles.tabItemLabelActive : styles.tabItemLabelInactive]}>
                {title}
            </Text>
            <View style={[styles.tabItemStatus, active ? styles.tabItemStatusActive : styles.tabItemStatusInactive]} />
        </TouchableOpacity>
    );
}


