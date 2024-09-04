import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { wp } from "../helpers/screenSizes";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";

export interface ButtonProps extends TouchableOpacityProps {
    rounded?: boolean | undefined,
    size?: "sm" | "md" | "lg" | undefined,
    bordered?: boolean | undefined,
    left?: React.ReactNode | undefined,
    right?: React.ReactNode | undefined,
}

export function ButtonPrimary({
    children,
    rounded,
    size = "md",
    bordered,
    style,
    activeOpacity,
    left,
    right
}: ButtonProps) {
    const masterColor = appColors.primary

    const fontSize = size === "sm" ? wp(2.5) : size === "md" ? wp(3.5) : size === "lg" ? wp(4) : wp(3.5)
    const padding = size === "sm" ? wp(1) : size === "md" ? wp(1.5) : size === "lg" ? wp(2.3) : wp(1.5)

    return (
        <TouchableOpacity activeOpacity={activeOpacity ?? .6} style={[styles.button, {
            borderColor: masterColor,
            borderWidth: bordered ? 1 : 0,
            backgroundColor: bordered ? appColors.light : masterColor,
            borderRadius: rounded ? wp(100) : wp(1),
            padding,
        }, style]}>
            {left}
            
            {typeof children === 'string' ? (
                <Text style={{
                    fontSize,
                    fontFamily: fonts.Bold,
                    color: bordered ? masterColor : appColors.light,
                    textAlign: "center",
                    paddingTop: wp(.5)
                }}>
                    {children}
                </Text>
            ) : children}

            {right}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})