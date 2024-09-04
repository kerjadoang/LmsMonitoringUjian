import React, { useEffect, useState } from "react";
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { appColors } from "../helpers/colors";
import { wp } from "../helpers/screenSizes";
import TabItem from "../components/TabItem";
import { fonts } from "../helpers/fonts";
import Toast from "react-native-toast-message";
import { ButtonPrimary } from "../components/Button";
import UjianItem from "../components/UjianItem";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../types/navigation.types";

export default function Ujian() {
    const navigation = useNavigation<StackNavigationProp>()

    const [activeTab, setActiveTab] = useState<"draft" | "dijadwalkan">("draft")

    const onPressPaketSoal = () => {
        Toast.show({
            type: "success",
            text1: "Paket Soal Pressed!"
        })
    }

    const onPressJadwalkanUjian = () => {
        Toast.show({
            type: "success",
            text1: "Jadwalkan Ujian Pressed!"
        })
    }

    useEffect(() => {
        // handle perubahan tab draft / dijadwalkan

    }, [activeTab])

    const onPressDetailUjian = (item: any) => {
        navigation.navigate("UjianReview")
    }

    return (
        <View style={styles.container}>

            {/* breadcrumb */}
            <View style={styles.breadcrumb}>
                <Text style={styles.breadcrumbText}>
                    <Text style={styles.breadcrumbTextNonActive}>Beranda</Text>
                    {"  >  "}
                    <Text style={styles.breadcrumbTextActive}>Ujian</Text>
                </Text>
            </View>

            {/* Paket Soal */}
            <TouchableOpacity activeOpacity={.8} style={styles.paketSoal} onPress={onPressPaketSoal}>
                <Image source={require("../assets/icons/file.png")} style={styles.paketSoalIcon} resizeMode="contain" />
                <View style={{ flex: 1, padding: wp(1) }}>
                    <Text style={styles.paketSoalLabel}>Paket Soal</Text>
                    <Text style={styles.paketSoalDescription}>Buat dan kelola soal ujian</Text>
                </View>
                <Text style={styles.paketSoalRight}>{">"}</Text>
            </TouchableOpacity>

            {/* Tab */}
            <View style={{
                flexDirection: "row",
                marginTop: wp(3)
            }}>
                <TabItem title="Draft" active={activeTab === "draft"} onPress={() => setActiveTab("draft")} />
                <TabItem title="Dijadwalkan" active={activeTab === "dijadwalkan"} onPress={() => setActiveTab("dijadwalkan")} />
            </View>

            {/* Filter */}
            <View style={styles.filterContainer}>
                <TouchableOpacity activeOpacity={.5} style={{ padding: wp(1) }} onPress={() => { }}>
                    <Image source={require("../assets/icons/search.png")} style={styles.btnFooterIcon} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} style={styles.filterButton} onPress={() => { }}>
                    <Text style={styles.filterText} numberOfLines={1}>Semua Tipe</Text>
                    <Image source={require("../assets/icons/arrow-down.png")} style={styles.filterIcon} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} style={styles.filterButton} onPress={() => { }}>
                    <Text style={styles.filterText} numberOfLines={1}>Semua Mapel</Text>
                    <Image source={require("../assets/icons/arrow-down.png")} style={styles.filterIcon} resizeMode="contain" />
                </TouchableOpacity>
            </View>

            {/* List item */}
            <View style={{ flex: 1 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    renderItem={({ item }) => (
                        <UjianItem
                            chip1="Ulangan harian"
                            chip2="Kelas 8 - A"
                            label="Ulangan harian pola bilangan"
                            subLabel="Matematika"
                            createdAt="Sel, 4 Jul 2022"
                            onPressDetail={() => onPressDetailUjian(item)}
                        />
                    )}
                />
            </View>

            {/* Button Footer */}
            <ButtonPrimary rounded left={
                <Image source={require("../assets/icons/plus.png")} style={styles.btnFooterIcon} resizeMode="contain" />
            } onPress={onPressJadwalkanUjian}>
                Jadwalkan Ujian
            </ButtonPrimary>
        </View>
    )
}

const styles = StyleSheet.create({
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