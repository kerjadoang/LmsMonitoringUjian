import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React from "react";
import Splashscreen from "./views/Splashscreen";
import { NavigatorStackList } from "./types/navigation.types";
import Ujian from "./views/Ujian";
import UjianReview from "./views/UjianReview";
import { appColors } from "./helpers/colors";
import { fonts } from "./helpers/fonts";

const Stack = createNativeStackNavigator<NavigatorStackList>()


const defaultScreenOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: appColors.light,
    },
    headerTintColor: appColors.primary,
    headerTitleStyle: {
        color: appColors.dark,
        fontFamily: fonts.SemiBold
    },
    headerShadowVisible: false
}

// name screen baru bisa ditambahkan juga ke types navigation.types.tsx NavigatorStackList agar type-safe

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={defaultScreenOptions}>
            <Stack.Screen name="SplashScreen" component={Splashscreen} options={{ headerShown: false }} />
            <Stack.Screen name="Ujian" component={Ujian} />
            <Stack.Screen name="UjianReview" component={UjianReview} options={{ title: "Review Ujian" }} />
        </Stack.Navigator>
    )
}