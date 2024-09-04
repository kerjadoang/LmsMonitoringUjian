import React, { useState , useEffect} from "react";
import { GestureResponderEvent, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"; // Mengimpor styles dari style.tsx
import { ButtonPrimary } from "./components/Button";
import SectionMonitoringStatusItem from "./components/SectionMonitoringStatusItem";
import SectionMonitoringNotPresentItemItem from "./components/SectionMonitoringNotPresentItem";
import SectionMonitoringDoneItem from "./components/SectionMonitoringDoneItem";
import { apiGet } from "@/api/wrapping";
import { PoppinsText } from '@/components/atoms';

// Definisikan interface untuk data API di sini jika belum didefinisikan di tempat lain
interface StudentDetail {
    name: string;
    joinAt?: string;
    foul?: number;
    progressLabel?: string;
    progressPercent?: number;
    status: "present" | "absent" | "done";
    phone?: string;
    email?: string;
    timeCollect?: string;
    duration?: string;
}

interface ApiResponse {
    title: string;
    subTitle: string;
    date: string;
    status: string;
    timeRemaining: string;
    studentsPresent: number;
    totalStudents: number;
    studentsDone: number;
    studentsAbsent: number;
    details: StudentDetail[];
}

export default function UjianMonitoring() {
    const [data, setData] = useState<ApiResponse | null>(null); // Menggunakan interface ApiResponse
    const [showSection2, setShowSection2] = useState(false);
    const [showSection3, setShowSection3] = useState(false);
    const [showSection4, setShowSection4] = useState(false);

    useEffect(() => {
        // Fetch data using apiGet
        const fetchData = async () => {
            try {
                const response = await apiGet<ApiResponse>({
                    url: "",//"https://api.example.com/ujian",
                    fullResponse: false,
                    resHeaders: false,
                    config: {},
                    headers: {},
                    retry: 3,
                    onTimeout: () => {
                        console.log("Request timed out");
                    },
                });
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    function onPressPeriksa(res: number): void {
      //  throw new Error("Function not implemented.");
    }

    function onPressDetailUjian(event: GestureResponderEvent): void {
        //throw new Error("Function not implemented.");
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingContainer}>

                    {/* Section 1 */}
                    <View style={styles.sectionContainer}>
                     {/*   <Text style={styles.title}>UTS Ekonomi SMP Santa Maria</Text> */}
                        <PoppinsText> UTS Ekonomi SMP Santa Maria </PoppinsText>
                   {/*     <Text style={styles.subTitle}>Kelas 8-B ・ Ujian Tengah Semester ・Ekonomi</Text> */}
                        <PoppinsText> UTS Ekonomi SMP Santa Maria </PoppinsText>
                        <View style={styles.hr} />

                        <View style={styles.imageOne}>
                            <Image source={require("../assets/icons/clock.svg")} style={styles.timeIcon} resizeMode="contain" />
                       {/*     <Text style={styles.timeText}>Jumat, 12 Juni 2024, Jam 10:00 WITA</Text> */}
                            <PoppinsText> Jumat, 12 Juni 2024, Jam 10:00 WITA</PoppinsText>
                        </View>

                        <View style={styles.status}>
                           {/* <Text style={styles.statusLabel}>Sedang Berlangsung</Text> */}
                           <PoppinsText> Sedang Berlangsung</PoppinsText>
                        </View>

                     {/*   <Text style={styles.infoLabelCenter}>1 jam : 20 menit tersisa</Text>*/}
                        <PoppinsText> Sedang Berlangsung</PoppinsText>
                        <View style={styles.buttonRow}>
                            <View style={styles.buttonWrapper}>
                                <ButtonPrimary rounded bordered onPress={onPressDetailUjian}>
                                    Detail Ujian
                                </ButtonPrimary>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <ButtonPrimary rounded bordered onPress={() => console.log("Refresh button pressed")}>
                                    Refresh
                                </ButtonPrimary>
                            </View>
                        </View>
                    </View>

                    {/* Section 2 */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.flexRow}>
                            <View style={styles.flex}>
                              {/*  <Text style={styles.section2Title}>5 dari 7 murid sudah hadir</Text> */}
                                <PoppinsText> 5 dari 7 murid sudah hadir</PoppinsText>
                            </View>
                            <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={() => setShowSection2(!showSection2)}>
                                <Image source={require("../assets/icons/arrow-down.svg")} style={[styles.arrowImage, { transform: [{ rotateX: showSection2 ? "180deg" : "0deg" }] }]} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        {showSection2 && (
                            <View style={styles.sectionContent}>
                                {[1, 2, 3, 4, 5].map((res, i) => (
                                    <SectionMonitoringStatusItem
                                        key={i + "_monitoring_status"}
                                        photo={require("../assets/images/profile.svg")}
                                        name="Alfiansyah Ramadhan Putra"
                                        joinAt="12/6/2024, 10:00"
                                        foul={2}
                                        progressLabel={"10 dari 100 soal"}
                                        progressPercent={80} phone={""} email={""}                                    />
                                ))}
                            </View>
                        )}
                    </View>

                    {/* Section 3 */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.flexRow}>
                            <View style={styles.flex}>
                               {/*   <Text style={styles.section3Title}>2 murid belum hadir</Text> */}
                               <PoppinsText >2 murid belum hadir</PoppinsText>
                            </View>
                            <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={() => setShowSection3(!showSection3)}>
                                <Image source={require("../assets/icons/arrow-down.svg")} style={[styles.arrowImage, { transform: [{ rotateX: showSection3 ? "180deg" : "0deg" }] }]} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        {showSection3 && (
                            <View style={styles.sectionContent}>
                                {[1, 2, 3, 4, 5].map((res, i) => (
                                    <SectionMonitoringNotPresentItemItem
                                        key={i + "_not_present"}
                                        photo={require("../assets/images/profile.svg")}
                                        name="John Snow Pragiwaksono"
                                        phone="081082083084"
                                        email="john@gmail.com"
                                    />
                                ))}
                            </View>
                        )}
                    </View>

                    {/* Section 4 */}
                    <View style={styles.sectionContainer}>
                        <View style={styles.flexRow}>
                            <View style={styles.flex}>
                                
                              {/*  <Text style={styles.section4Title}>2 murid selesai mengerjakan</Text> */}
                                <PoppinsText>2 murid selesai mengerjakan</PoppinsText>
                            </View>
                            <TouchableOpacity activeOpacity={.8} style={styles.btnAction} onPress={() => setShowSection4(!showSection4)}>
                                <Image source={require("../assets/icons/arrow-down.svg")} style={[styles.arrowImage, { transform: [{ rotateX: showSection4 ? "180deg" : "0deg" }] }]} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        {showSection4 && (
                            <View style={styles.sectionContent}>
                                {[1, 2, 3, 4, 5].map((res, i) => (
                                    <SectionMonitoringDoneItem
                                        key={i + "_done"}
                                        photo={require("../assets/images/profile.svg")}
                                        name="Alfiansyah Ramadhan Putra"
                                        timeCollect="12/6/2024, 10:00"
                                        duration="4 jam 10 menit"
                                        onPressPeriksa={() => onPressPeriksa(res)}
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
