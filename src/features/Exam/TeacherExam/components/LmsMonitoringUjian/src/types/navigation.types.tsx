import { NavigationProp, RouteProp } from "@react-navigation/native"

export type NavigatorStackList = {
    SplashScreen: undefined,
    Ujian: undefined,
    UjianReview: undefined,
    UjianMonitoring: undefined,
    UjianHasil: undefined,
}

export type StackNavigationProp = NavigationProp<NavigatorStackList>