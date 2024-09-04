import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle, TextStyle } from "react-native";
import { wp } from "../helpers/screenSizes";
import { appColors } from "../helpers/colors";
import { fonts } from "../helpers/fonts";
import { PoppinsText } from "@/components/atoms";
import { styles } from "../style";

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
    right,
    disabled,
    onPress
}: ButtonProps) {
    const masterColor = appColors.primary

    const fontSize = size === "sm" ? wp(2.5) : size === "md" ? wp(3.5) : size === "lg" ? wp(4) : wp(3.5)
    const padding = size === "sm" ? wp(1) : size === "md" ? wp(1.5) : size === "lg" ? wp(2.3) : wp(1.5)

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity ?? 0.6}
            style={[
                styles.button,
                bordered && styles.bordered,
                rounded && styles.rounded,
                { borderColor: masterColor, backgroundColor: bordered ? appColors.light : masterColor, padding },
                style,
            ]}
            disabled={disabled}
            onPress={onPress}
        >
            {left}

            {typeof children === "string" ? (
                <>
                  {/*<Text
                    style={[
                        styles.text,
                        { fontSize, color: bordered ? masterColor : appColors.light },
                    ]}
                >
                    {children}
                </Text> */}
                   <PoppinsText style={[
                        styles.text,
                        { fontSize, color: bordered ? masterColor : appColors.light },
                    ]}
                    >
                        {children}</PoppinsText></> 


            ) : (
                children
            )}

            {right}
        </TouchableOpacity>
    );
}

