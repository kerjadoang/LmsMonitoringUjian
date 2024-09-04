import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { appColors } from "./helpers/colors";
import { wp } from "./helpers/screenSizes";
import { fonts } from "./helpers/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.default,
    },
    paddingContainer: {
        padding: wp(5),
    },
    sectionContainer: {
        padding: wp(3),
        borderRadius: wp(2),
        elevation: 3,
        backgroundColor: appColors.light,
        marginBottom: wp(3)
    },
    title: {
        fontFamily: fonts.Bold,
        fontSize: wp(4),
        color: appColors.primary
    },
    subTitle: {
        fontFamily: fonts.Regular,
        fontSize: wp(3.5),
        color: appColors.grey,
    },
    hr: {
        height: 1,
        backgroundColor: appColors.lightGrey,
        marginVertical: wp(2)
    },
    timeIcon: {
        height: wp(3.5),
        width: wp(3.5),
        marginTop: wp(.5),
        marginRight: wp(1)
    },
    imageOne: {
        flexDirection: "row",
    },
    timeText: {
        color: appColors.dark,
        fontFamily: fonts.Regular,
        fontSize: wp(3.5)
    },
    status: {
        padding: wp(1.5),
        alignItems: "center",
        borderRadius: wp(2),
        backgroundColor: appColors.successLight,
        marginVertical: wp(1.5)
    },
    statusLabel: {
        color: appColors.success,
        fontFamily: fonts.Bold,
        fontSize: wp(3.8),
        textAlign: "center"
    },
    infoLabelCenter: {
        fontFamily: fonts.SemiBold,
        textAlign: "center",
        marginVertical: wp(2),
        fontSize: wp(3.5),
        color: appColors.darkGrey,
    },
    buttonRow: {
        flexDirection: "row",
    },
    buttonWrapper: {
        flex: 1,
        padding: wp(1),
    },
    flexRow: {
        flexDirection: "row",
    },
    flex: {
        flex: 1,
    },
    section2Title: {
        color: appColors.dark,
        fontFamily: fonts.Bold,
        fontSize: wp(4),
    },
    section3Title: {
        color: appColors.dark,
        fontFamily: fonts.Bold,
        fontSize: wp(4),
    },
    section4Title: {
        color: appColors.dark,
        fontFamily: fonts.Bold,
        fontSize: wp(4),
    },
    btnAction: {
        borderRadius: wp(100),
        padding: wp(1),
        height: wp(6),
        width: wp(6),
        backgroundColor: appColors.info,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp(2)
    },
    arrowImage: {
        flex: 1,
    },
    sectionContent: {
        paddingTop: wp(2),
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    } as ViewStyle,
    bordered: {
        borderWidth: 1,
    } as ViewStyle,
    rounded: {
        borderRadius: wp(100),
    } as ViewStyle,
    text: {
        fontFamily: fonts.Bold,
        textAlign: "center",
        paddingTop: wp(0.5),
    } as TextStyle,
    fontSm: {
        fontSize: wp(2.5),
    } as TextStyle,
    fontMd: {
        fontSize: wp(3.5),
    } as TextStyle,
    fontLg: {
        fontSize: wp(4),
    } as TextStyle,
    paddingSm: {
        padding: wp(1),
    } as ViewStyle,
    paddingMd: {
        padding: wp(1.5),
    } as ViewStyle,
    paddingLg: {
        padding: wp(2.3),
    } as ViewStyle,

    sectionCheckContainer: {
        padding: wp(3),
    },
    sectionCheckRowContainer: {
        flexDirection: "row",
    },
    sectionCheckTextContainer: {
        flex: 1,
        paddingHorizontal: wp(1),
    },
    sectionCheckTitle: {
        fontSize: wp(4),
        fontFamily: "Poppins-Bold",
    },
    sectionCheckTitleDark: {
        color: appColors.dark,
    },
    sectionCheckPhoto: {
        width: wp(10),
        height: wp(10),
        borderRadius: wp(5),
    },
    sectionCheckBtnAction: {
        justifyContent: "center",
        alignItems: "center",
    },
    sectionCheckArrowImage: {
        width: wp(5),
        height: wp(5),
    },
    sectionCheckDetailContainer: {
        paddingHorizontal: wp(3),
    },
    sectionCheckDetailText: {
        fontSize: wp(3.5),
        color: appColors.grey,
        marginBottom: wp(2),
    },
    sectionFoulContainer: {
        borderTopWidth: 1,
        borderTopColor: appColors.lightGrey,
        paddingVertical: wp(2),
    },
    sectionFoulRow: {
        flexDirection: "row",
    },
    sectionFoulNameContainer: {
        flex: 1,
        paddingHorizontal: wp(1),
    },
    sectionFoulPhoto: {
        height: wp(5),
        width: wp(5),
    },
    sectionFoulName: {
        fontFamily: fonts.Bold,
        fontSize: wp(3.5),
        color: appColors.dark,
    },
    sectionFoulBtnAction: {
        borderRadius: wp(100),
        padding: wp(1),
        height: wp(6),
        width: wp(6),
        backgroundColor: appColors.info,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp(2),
    },
    sectionFoulArrowIcon: {
        flex: 1,
    },
    sectionFoulIconRotated: {
        transform: [{ rotateX: "180deg" }],
    },
    sectionFoulIconDefault: {
        transform: [{ rotateX: "0deg" }],
    },
    sectionFoulDetailContainer: {
        paddingHorizontal: wp(3),
    },
    sectionFoulDetailText: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingVertical: wp(2),
    },
    sectionFoulCollection: {
        color: "darkred",
        fontFamily: fonts.Bold,
    },
    monitoringDoneContainer: {
        borderTopWidth: 1,
        borderTopColor: appColors.lightGrey,
        paddingVertical: wp(2),
    },
    monitoringDoneRow: {
        flexDirection: "row",
    },
    monitoringDoneNameContainer: {
        flex: 1,
        paddingHorizontal: wp(1),
    },
    monitoringDonePhoto: {
        height: wp(5),
        width: wp(5),
    },
    monitoringDoneName: {
        fontFamily: fonts.Bold,
        fontSize: wp(3.5),
        color: appColors.dark,
    },
    monitoringDoneBtnAction: {
        borderRadius: wp(100),
        padding: wp(1),
        height: wp(6),
        width: wp(6),
        backgroundColor: appColors.info,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp(2),
    },
    monitoringDoneArrowIcon: {
        flex: 1,
    },
    monitoringDoneIconRotated: {
        transform: [{ rotateX: "180deg" }],
    },
    monitoringDoneIconDefault: {
        transform: [{ rotateX: "0deg" }],
    },
    monitoringDoneDetailContainer: {
        paddingHorizontal: wp(3),
    },
    monitoringDoneDetailText: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingVertical: wp(2),
    },
    monitoringDoneDetailTextNoPaddingBottom: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingBottom: 0,
    },
    monitoringDoneDetailTextNoPaddingTop: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingTop: 0,
    },

    monitoringNotPresentContainer: {
        borderTopWidth: 1,
        borderTopColor: appColors.lightGrey,
        paddingVertical: wp(2),
    },
    monitoringNotPresentRow: {
        flexDirection: "row",
    },
    monitoringNotPresentNameContainer: {
        flex: 1,
        paddingHorizontal: wp(1),
    },
    monitoringNotPresentPhoto: {
        height: wp(5),
        width: wp(5),
    },
    monitoringNotPresentName: {
        fontFamily: fonts.Bold,
        fontSize: wp(3.5),
        color: appColors.dark,
    },
    monitoringNotPresentBtnAction: {
        borderRadius: wp(100),
        padding: wp(1),
        height: wp(6),
        width: wp(6),
        backgroundColor: appColors.info,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp(2),
    },
    monitoringNotPresentArrowIcon: {
        flex: 1,
    },
    monitoringNotPresentIconRotated: {
        transform: [{ rotateX: "180deg" }],
    },
    monitoringNotPresentIconDefault: {
        transform: [{ rotateX: "0deg" }],
    },
    monitoringNotPresentDetailContainer: {
        paddingHorizontal: wp(3),
    },
    monitoringNotPresentDetailText: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingVertical: wp(2),
    },
    monitoringNotPresentDetailTextNoPaddingBottom: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingBottom: 0,
    },
    monitoringNotPresentDetailTextNoPaddingTop: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingTop: 0,
    },

    monitoringStatusContainer: {
        borderTopWidth: 1,
        borderTopColor: appColors.lightGrey,
        paddingVertical: wp(2),
    },
    monitoringStatusRow: {
        flexDirection: "row",
    },
    monitoringStatusNameContainer: {
        flex: 1,
        paddingHorizontal: wp(1),
    },
    monitoringStatusPhoto: {
        height: wp(5),
        width: wp(5),
    },
    monitoringStatusTitle: {
        fontFamily: fonts.Bold,
        fontSize: wp(3.5),
        color: appColors.primary,
    },
    monitoringStatusBtnAction: {
        borderRadius: wp(100),
        padding: wp(1),
        height: wp(6),
        width: wp(6),
        backgroundColor: appColors.info,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp(2),
    },
    monitoringStatusArrowIcon: {
        flex: 1,
    },
    monitoringStatusIconRotated: {
        transform: [{ rotateX: "180deg" }],
    },
    monitoringStatusIconDefault: {
        transform: [{ rotateX: "0deg" }],
    },
    monitoringStatusDetailContainer: {
        paddingHorizontal: wp(3),
    },
    monitoringStatusDetailText: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
        paddingVertical: wp(2),
    },
    monitoringStatusDetailTextNoPaddingBottom: {
        paddingBottom: 0,
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
    },
    monitoringStatusDetailTextNoPaddingTop: {
        paddingTop: 0,
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3.5),
    },
    monitoringStatusDetailTextFoul: {
        color: "darkred",
        fontFamily: fonts.SemiBold,
        paddingVertical: 0,
    },
    monitoringStatusProgressRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    monitoringStatusProgressContainer: {
        flex: 1,
        height: wp(1),
        backgroundColor: appColors.lightGrey,
        marginLeft: wp(2),
        borderRadius: wp(1),
        flexDirection: "row",
    },
    monitoringStatusProgressBar: {
        backgroundColor: appColors.primary,
        borderRadius: wp(1),
    },

    tabItemContainer: {
        flex: 1,
    },
    tabItemLabel: {
        textAlign: "center",
        fontSize: wp(3.5),
        fontFamily: fonts.SemiBold,
        padding: wp(2),
    },
    tabItemLabelActive: {
        color: appColors.primary,
    },
    tabItemLabelInactive: {
        color: appColors.darkGrey,
    },
    tabItemStatus: {
        height: wp(0.7),
        borderTopLeftRadius: wp(1),
        borderTopRightRadius: wp(1),
    },
    tabItemStatusActive: {
        backgroundColor: appColors.primary,
    },
    tabItemStatusInactive: {
        backgroundColor: appColors.default,
    },

    ujianItemOuterContainer: {
        paddingHorizontal: wp(1),
    },
    ujianItemContainer: {
        backgroundColor: appColors.light,
        padding: wp(3),
        borderRadius: wp(2),
        elevation: 3,
        marginTop: wp(1),
        marginBottom: wp(2),
    },
    ujianItemRow: {
        flexDirection: "row",
    },
    ujianItemChipContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    ujianItemChipItem: {
        fontSize: wp(3),
        fontFamily: fonts.Regular,
        color: appColors.primary,
        backgroundColor: appColors.info,
        paddingHorizontal: wp(2),
        paddingVertical: wp(0.6),
        borderRadius: wp(100),
        margin: wp(1),
    },
    ujianItemBtnAction: {
        borderRadius: wp(100),
        padding: wp(1),
        height: wp(6),
        width: wp(6),
        backgroundColor: appColors.info,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp(2),
    },
    ujianItemIcon: {
        flex: 1,
    },
    ujianItemDetailContainer: {
        paddingHorizontal: wp(2),
    },
    ujianItemSubLabel: {
        fontFamily: fonts.Regular,
        color: appColors.darkGrey,
        fontSize: wp(3),
    },
    ujianItemLabel: {
        fontFamily: fonts.Bold,
        color: appColors.dark,
        fontSize: wp(3.8),
    },
    ujianItemCreatedLabel: {
        fontFamily: fonts.Regular,
        color: appColors.grey,
        fontSize: wp(3),
    },
    ujianItemCalendarIcon: {
        height: wp(3),
        width: wp(3),
        marginRight: wp(1),
        marginTop: wp(0.3),
    },
    ujianItemCreatedAt: {
        fontFamily: fonts.Regular,
        color: appColors.dark,
        fontSize: wp(3),
    },
});
