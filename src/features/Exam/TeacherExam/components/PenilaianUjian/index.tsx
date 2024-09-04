import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles'; // Pastikan file styles ada dan diimpor dengan benar
import { apiGet } from '@/api/wrapping'; // Pastikan apiGet diimpor dengan benar

// Interface untuk tipe data yang diambil dari API
interface ExamData {
  title: string;
  studentName: string;
  studentClass: string;
  studentAvatarUrl: string;
  examName: string;
  examDate: string;
  status: string;
  score: string;
  totalScore: number;
  questions: number[];
  currentQuestion: string;
  questionWeight: number;
  questionText: string;
  studentAnswer: string;
  correctAnswer: string;
  explanation: string;
}

const PenilaianUjian = () => {
  const [examData, setExamData] = useState<ExamData | null>(null);

  // Fungsi untuk mengambil data ujian dari API
  const fetchExamData = async () => {
    try {
      const response = await apiGet<ExamData>({
        url: '/path/to/your/api/exam-data', // Ganti dengan URL endpoint API yang sesuai
        headers: {
          'Authorization': 'Bearer your-token-here', // Tambahkan header jika diperlukan
        },
        config: {
          timeout: 5000, // Timeout 5 detik
        },
        retry: 3, // Coba ulangi permintaan hingga 3 kali jika gagal
     //   tags: ['PenilaianUjian', 'fetchData'], // Tag untuk logging
        onTimeout: () => {
          Alert.alert('Timeout', 'Permintaan data ujian melebihi waktu yang ditentukan.');
        },
        fullResponse: false, // Hanya mengembalikan data dari `res.data.data`
        resHeaders: false, // Tidak hanya mengembalikan headers
        fullErrorResponse: false, // Hanya kembalikan pesan error, bukan seluruh respons error
      });

      setExamData(response);
    } catch (error) {
      const errorMessage = 'Gagal mengambil data ujian.';//typeof error === 'string' ? error : error?.message || 'Gagal mengambil data ujian.';
      Alert.alert('Error', errorMessage);
      console.error('API Error:', error);
    }
  };

  // Memanggil fetchExamData saat komponen pertama kali dimuat
  useEffect(() => {
    fetchExamData();
  }, []);

  // Menggunakan data yang diambil dari API atau default value jika data belum tersedia
  const title = examData?.title || 'Hasil Ujian';
  const circles = examData?.questions || [1, 2, 3, 4, 5, 6, 7];



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton}>
            {/*   <FontAwesome5 name="chevron-left" size={16} color="#1A73E8" />*/}
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: examData?.studentAvatarUrl || 'https://randomuser.me/api/portraits/men/36.jpg' }}
              style={styles.avatar}
            />
            <View style={styles.profileText}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{examData?.studentName || 'Charlie Van Houten'}</Text>
                <Text style={styles.class}> • {examData?.studentClass || 'Kelas 12-B'}</Text>
              </View>

              <View style={styles.detailsContainer}>
                {/*  <FontAwesome5
                  name="user-graduate"
                  size={12}
                  color="black"
                  style={styles.icon}
                />*/}
                <Text style={styles.details}>{examData?.examName || 'UTS Ekonomi SMP Santa Maria'}</Text>
              </View>

              <View style={styles.detailsContainer}>
                {/* <FontAwesome5
                  name="calendar-alt"
                  size={12}
                  color="black"
                  style={styles.icon}
                />*/}
                <Text style={styles.details}>
                  {examData?.examDate || 'Jumat, 12 Juni 2024, Jam 10:00 WITA'}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.statusContainer}>
            <Text style={styles.status}>{examData?.status || 'Soal sudah dinilai'}</Text>
            <Text style={styles.score}>{examData?.score || '10 dari 50'}</Text>
          </View>

          <View style={styles.totalScoreContainer}>
            <Text style={styles.totalScoreText}>Total Skor</Text>
            <Text style={styles.totalScore}>{examData?.totalScore || 80}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Simpan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Kumpulkan</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.questionsCard}>
          {/*  <Text style={styles.questionTitle}>{examData?.totalQuestions || '50 Soal'}</Text> */}
          <View style={styles.circleContainer}>
            {circles.map((number, index) => (
              <View key={index} style={styles.circle}>
                <Text style={styles.circleText}>{number}</Text>
              </View>
            ))}
          </View>

          <View style={styles.questionSection}>
            <Text style={styles.questionNumber}>Soal {examData?.currentQuestion || '03'}.</Text>
            <TouchableOpacity style={styles.gradeButton}>
              <Text style={styles.gradeButtonText}>Berikan Nilai</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailLabel}>
              <Text style={styles.labelText}>Uraian</Text>
            </View>
            <View style={styles.detailValue}>
              <Text style={styles.labelText}>Bobot Nilai : {examData?.questionWeight || '10'}</Text>
            </View>
          </View>

          <Text style={styles.questionText}>
            {examData?.questionText || 'Berikut ini yang bukan merupakan konsep dasar yang mendasari penyusunan prinsip akuntansi adalah .....'}
          </Text>

          <View style={styles.answerSection}>
            <Text style={styles.answerLabel}>Jawaban Murid</Text>
            <View style={styles.answerBox}>
              {/*<Text style={styles.answerLabelText}>{examData?.studentAnswer || 'Prinsip Dagang'}</Text>*/}
            </View>
          </View>

          <View style={styles.correctAnswerSection}>
            <Text style={styles.correctAnswerLabel}>Jawaban Benar</Text>
            <View style={styles.correctAnswerBox}>
              <Text style={styles.correctAnswerText}>{examData?.correctAnswer || 'Prinsip Dagang'}</Text>
            </View>
          </View>

          <View style={styles.explanationSection}>
            <Text style={styles.explanationTitle}>Pembahasan</Text>
            <Text style={styles.explanationText}>
              {examData?.explanation || 'Prinsip-prinsip hukum perdagangan dalam ketentuan WTO yang sesuai dengan ketentuan syari\'ah adalah national treatment, freer trade/fair competition, special and differential treatment, dan transparansi.'}
            </Text>
          </View>

          <View style={styles.navButtonContainer}>
            <TouchableOpacity style={styles.prevButton}>
              <Text style={styles.prevButtonText}>Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Berikutnya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PenilaianUjian;
