import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { appColors } from "../helpers/colors";
import { wp } from "../helpers/screenSizes";
import { StackActions, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../types/navigation.types";
import { fonts } from "../helpers/fonts";

export default function Splashscreen() {
    const navigation = useNavigation<StackNavigationProp>()

    useEffect(() => {
        initialData()
    }, [])

    const initialData = () => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace("Ujian"))
        }, 2000)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>PTN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.default,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: wp(5),
        color: appColors.primary,
        fontFamily: fonts.ExtraBold
    }
})