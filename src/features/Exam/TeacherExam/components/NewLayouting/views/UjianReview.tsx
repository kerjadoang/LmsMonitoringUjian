import React, { Fragment, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { wp } from "../helpers/screenSizes";
import { fonts } from "../helpers/fonts";
import { ButtonPrimary } from "../components/Button";
import SectionCheckItem from "../components/SectionCheckItem";
import SectionFoulItem from "../components/SectionFoulItem";

export default function UjianReview() {
    const [showSection2, setShowSection2] = useState(false)
    const [showSection3, setShowSection3] = useState(false)
    const [showSection4, setShowSection4] = useState(false)

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: wp(5) }}>

                    {/* Section 1 */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.title}>UTS Ekonomi SMP Santa Maria</Text>
                        <Text style={styles.subTitle}>Kelas 8-B ・ Ujian Tengah Semester ・Ekonomi</Text>

                        <View style={styles.hr} />

                        <View style={{ flexDirection: "row" }}>
                            <Image source={require("../assets/icons/clock.png")} style={styles.timeIcon} resizeMode="contain" />
                            <Text style={[styles.subTitle, { color: appColors.dark }]}>Jumat, 12 Juni 2024, Jam 10:00 WITA</Text>
                        </View>

                        <View style={styles.status}>
                            <Text style={styles.statusLabel}>Sudah Selesai</Text>
                        </View>

                        <View style={styles.hr} />

                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.infoLabel}>Murid Mengumpulkan</Text>
                                <Text style={styles.infoValue}>30</Text>
                            </View>
                            <View>
                                <Text style={styles.infoLabel}>Murid Tidak Hadir</Text>
                                <Text style={styles.infoValue}>0</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.infoLabel}>Rata-rata Nilai</Text>
                                <Text style={styles.infoValue}>72.5</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.infoLabel}>Nilai Tertinggi</Text>
                                <Text style={styles.infoValue}>100</Text>
                            </View>
                            <View>
                                <Text style={styles.infoLabel}>Nilai Terendah</Text>
                                <Text style={styles.infoValue}>100</Text>
                            </View>
                        </View>
                    </View>

                    {/* Section 2 */}
                    <View style={styles.sectionContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.title, { color: appColors.dark }]}>Analisa nilai murid di semua soal</Text>
                            </View>
                            <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={() => setShowSection2(!showSection2)}>
                                <Image source={require("../assets/icons/arrow-down.png")} style={{ flex: 1, transform: [{ rotateX: showSection2 ? "180deg" : "0deg" }] }} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        {showSection2 && (
                            <Fragment>

                                <View style={{ flexDirection: "row", marginVertical: wp(2) }}>
                                    <View style={{ flex: 1, paddingHorizontal: wp(1) }}>
                                        <ButtonPrimary rounded bordered size="sm" onPress={() => { }}>
                                            Koreksi Nilai
                                        </ButtonPrimary>
                                    </View>
                                    <View style={{ flex: 1, paddingHorizontal: wp(1) }}>
                                        <ButtonPrimary rounded size="sm" onPress={() => { }}>
                                            Unduh ke .pdf
                                        </ButtonPrimary>
                                    </View>
                                </View>

                                <View style={styles.hr} />

                                {/* Table */}

                                <View>
                                    <View style={styles.tRow}>
                                        <View style={styles.thLeft}>
                                            <Text style={styles.th}>Nama Murid</Text>

                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((res, i) => (
                                                <View key={i + '_td_left'} style={styles.tdLeft}>
                                                    <Image source={require('../assets/images/profile.png')} style={styles.tdLeftImg} resizeMode="cover" />
                                                    <Text style={[styles.td, styles.tdLeftText]} numberOfLines={1}>Alfiansyah Ramadhan Putra</Text>
                                                </View>
                                            ))}
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <ScrollView showsHorizontalScrollIndicator={true} horizontal>
                                                <View>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text style={[styles.th, { width: wp(20), textAlign: "center" }]}>Nilai Akhir</Text>
                                                        <Text style={[styles.th, { width: wp(8), textAlign: "center" }]}>1</Text>
                                                        <Text style={[styles.th, { width: wp(8), textAlign: "center" }]}>2</Text>
                                                        <Text style={[styles.th, { width: wp(8), textAlign: "center" }]}>3</Text>
                                                    </View>

                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((res, i) => (
                                                        <View key={i + '_td_right'} style={styles.tdRight}>
                                                            <Text style={[styles.td, { width: wp(20), textAlign: "center" }]}>100</Text>
                                                            <Text style={[styles.td, { width: wp(8), textAlign: "center" }]}>10</Text>
                                                            <Text style={[styles.td, { width: wp(8), textAlign: "center" }]}>10</Text>
                                                            <Text style={[styles.td, { width: wp(8), textAlign: "center" }]}>10</Text>
                                                        </View>
                                                    ))}
                                                </View>
                                            </ScrollView>
                                        </View>
                                    </View>
                                </View>
                            </Fragment>
                        )}
                    </View>

                    {/* Section 3 */}
                    <View style={styles.sectionContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.title, { color: appColors.dark }]}>2 murid belum dinilai</Text>
                            </View>
                            <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={() => setShowSection3(!showSection3)}>
                                <Image source={require("../assets/icons/arrow-down.png")} style={{ flex: 1, transform: [{ rotateX: showSection3 ? "180deg" : "0deg" }] }} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        {showSection3 && (
                            <View style={{ paddingTop: wp(2) }}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((res, i) => (
                                    <SectionCheckItem
                                        key={i + '_check'}
                                        photo={require("../assets/images/profile.png")}
                                        name="Alfiansyah Ramadhan Putra"
                                        collection="12/6/2024, 10:00"
                                        onPressPeriksa={() => { }}
                                    />
                                ))}
                            </View>
                        )}
                    </View>

                    {/* Section 4 */}
                    <View style={styles.sectionContainer}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.title, { color: appColors.dark }]}>2 murid mencoba melanggar aturan</Text>
                            </View>
                            <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={() => setShowSection4(!showSection4)}>
                                <Image source={require("../assets/icons/arrow-down.png")} style={{ flex: 1, transform: [{ rotateX: showSection4 ? "180deg" : "0deg" }] }} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        {showSection4 && (
                            <View style={{ paddingTop: wp(2) }}>
                                <ButtonPrimary rounded style={{ marginBottom: wp(3) }} onPress={() => { }}>
                                    Unduh ke .xls
                                </ButtonPrimary>

                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((res, i) => (
                                    <SectionFoulItem
                                        key={i + '_foul'}
                                        photo={require("../assets/images/profile.png")}
                                        name="John Snow Pragiwaksono"
                                        collection="2"
                                        onPressUnduh={() => { }}
                                    />
                                ))}
                            </View>
                        )}
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.default,
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
    infoLabel: {
        fontFamily: fonts.Regular,
        fontSize: wp(3.5),
        color: appColors.darkGrey,
    },
    infoValue: {
        fontFamily: fonts.Bold,
        fontSize: wp(3.5),
        color: appColors.dark,
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
    tRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBlockColor: appColors.lightGrey,
    },
    thLeft: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: appColors.lightGrey
    },
    th: {
        fontFamily: fonts.Bold,
        fontSize: wp(3),
        color: appColors.grey,
        paddingVertical: wp(2),
        borderBottomWidth: 1,
        borderBottomColor: appColors.lightGrey
    },
    tdLeft: {
        flexDirection: "row",
        alignItems: "center",
        height: wp(10)
    },
    tdLeftImg: {
        height: wp(5),
        width: wp(5),
        borderRadius: wp(5)
    },
    td: {
        fontFamily: fonts.Regular,
        fontSize: wp(3),
        color: appColors.dark,
        paddingVertical: wp(2),
        borderBottomWidth: 1,
        borderBottomColor: appColors.lightGrey
    },
    tdLeftText: {
        flex: 1,
        paddingHorizontal: wp(1),
        borderBottomWidth: 0,
        fontFamily: fonts.SemiBold
    },
    tdRight: {
        flexDirection: "row",
        alignItems: "center",
        height: wp(10)
    }
})