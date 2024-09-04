import { StyleSheet } from 'react-native';
//import { appColors, fonts } from './path/to/your/theme';
//import { wp } from './path/to/your/responsiveHelper'; // Pastikan wp ini diimport dari modul yang tepat
import { appColors } from "./helpers/colors";;
import { wp } from "./helpers/screenSizes";
import { fonts } from "./helpers/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.default,
        padding: wp(5)
    },
    breadcrumb: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    breadcrumbText: {
        fontSize: wp(3.5),
        color: appColors.grey,
        fontFamily: fonts.Regular
    },
    breadcrumbTextNonActive: {
        textDecorationLine: "underline",
        textDecorationColor: appColors.grey
    },
    breadcrumbTextActive: {
        color: appColors.primary
    },
    paketSoal: {
        padding: wp(1),
        borderRadius: wp(2),
        elevation: 3,
        backgroundColor: appColors.light,
        flexDirection: "row",
        alignItems: "center",
        marginTop: wp(3)
    },
    paketSoalIcon: {
        margin: wp(2),
        height: wp(5),
        width: wp(5)
    },
    paketSoalLabel: {
        color: appColors.primary,
        fontFamily: fonts.Bold,
        fontSize: wp(3.5)
    },
    paketSoalDescription: {
        color: appColors.grey,
        fontFamily: fonts.Regular,
        fontSize: wp(3.5)
    },
    paketSoalRight: {
        fontFamily: fonts.Regular,
        fontSize: wp(5),
        color: appColors.primary,
        paddingHorizontal: wp(3)
    },
    btnFooterIcon: {
        height: wp(3.5),
        width: wp(3.5),
        marginRight: wp(1)
    },
    filterContainer: {
        flexDirection: "row",
        padding: wp(2),
        paddingBottom: wp(1),
        alignItems: "center"
    },
    filterButton: {
        flex: 1,
        padding: wp(2),
        flexDirection: "row",
        alignItems: "center"
    },
    filterText: {
        flex: 1,
        textAlign: "center",
        color: appColors.primary,
        fontFamily: fonts.SemiBold,
        fontSize: wp(3.5)
    },
    filterIcon: {
        height: wp(2),
        width: wp(2)
    }
})