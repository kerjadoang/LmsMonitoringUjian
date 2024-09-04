import { View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF7FF',
  },
  scrollViewContent: {
    paddingHorizontal: width * 0.04,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02, // Menambahkan padding vertikal agar terlihat lebih penuh
    backgroundColor: '#FFFFFF',
    marginBottom: height * 0.02,
    borderBottomWidth: 1, // Untuk memberikan garis bawah
    borderBottomColor: '#E5E5E5', // Warna garis bawah
  },
  backButton: {
    padding: width * 0.02,
    marginRight: width * 0.02,
  },
  headerTitle: {
    fontSize: width * 0.045,
    fontFamily: 'Poppins_700Bold',
    color: '#1D252D',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: width * 0.04,
    marginBottom: height * 0.02,
  },
  profileSection: {
    flexDirection: 'row',
    marginBottom: height * 0.02,
  },
  avatar: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: width * 0.065,
  },
  profileText: {
    marginLeft: width * 0.03,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins_700Bold',
    color: '#0F61E1',
  },
  class: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins_700Bold',
    color: '#0F61E1',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2 * 0.005,
  },
  icon: {
    marginRight: width * 0.02,
  },
  details: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins_400Regular',
    color: '#868E96',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
    //  margin:8,
  },
  status: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins_500Medium',
    color: '#666666',
    margin: 8,
    lineHeight: 21,
  },
  score: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins_700Bold',
    color: '#1D252D',
    lineHeight: 21,
    margin: 8,
  },
  totalScoreContainer: {
    backgroundColor: '#EFF7FF',
    padding: width * 0.04,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  totalScoreText: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins_600SemiBold',
    color: '#1E1E1E',
    lineHeight: 24,
    marginBottom: height * 0.01,
    letterSpacing: width * 0.04 * (1 / 100),
  },
  totalScore: {
    fontSize: width * 0.11,
    fontFamily: 'Poppins_600SemiBold',
    lineHeight: 24,
    margin: 8,
    color: '#0055B8',
    letterSpacing: width * 0.11 * (1 / 100),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    borderColor: '#0055B8',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    borderWidth: 2,
    borderRadius: 30,
    flex: 1,
    marginRight: width * 0.02,
  },
  saveButtonText: {
    color: '#0055B8',
    textAlign: 'center',
    fontSize: 13, //width * 0.04,
    fontFamily: 'Poppins_600SemiBold',
    letterSpacing: 13 * (1 / 100),
  },
  submitButton: {
    backgroundColor: '#0F61E1',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#0055B8',
    flex: 1,
  },
  submitButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: width * 0.04,
    fontFamily: 'Poppins_600SemiBold',
    letterSpacing: 14 * (1 / 100),
  },
  questionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: width * 0.04,
  },
  questionTitle: {
    fontSize: 16, //width * 0.04,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: height * 0.01,
    lineHeight: 24,
    color: '#0055B8',
  },
  questionSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
  },
  questionNumber: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins_600SemiBold',
    color: '#0055B8',
  },
  gradeButton: {
    backgroundColor: '#007BE0',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    borderRadius: 30,
    margin: 8,
  },
  gradeButtonText: {
    color: '#FFFFFF',
    fontSize: width * 0.035,
    fontFamily: 'Poppins_600SemiBold',
    lineHeight: 24,
    letterSpacing: width * 0.035 * (1 / 100),
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.01,
    backgroundColor: '#F3F8FF',
    // borderRadius: 25,
    //  paddingHorizontal: width * 0.04,
    // paddingVertical: height * 0.007,
  },
  detailLabel: {
    flex: 1,
    backgroundColor: '#F5F7F9',
    paddingVertical: 2,//height * 0.007,
    paddingHorizontal: 32,//width * 0.04,
  //  borderTopLeftRadius: 25,
    //borderBottomLeftRadius: 25,
  //  borderRightWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    gap:30
  },
  detailValue: {
    flex: 1,
    backgroundColor: '#F3F8FF',
    paddingVertical: height * 0.007,
    paddingHorizontal: width * 0.04,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: width * 0.035,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    textAlign: 'center',
  },
  questionText: {
    fontSize: 16,//width * 0.035,
    fontFamily: 'Poppins_400Regular',
    color: '#4D545C',
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
    lineHeight:24,
  },
  answerSection: {
    marginBottom: height * 0.02,
  },
  answerLabel: {
    fontSize: 16,//width * 0.035,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000000',
    marginBottom: height * 0.005,
    lineHeight:24
  },
  answerLabeltEXT:{
   fontFamily: 'Poppins_500Medium',
    color: '#1D252D',
    fontSize:15,
    lineHeight:24
  },
  answerBox: {
    backgroundColor: '#F3F8FF',
    padding: width * 0.03,
    borderRadius: 8,
  },
  correctAnswerSection: {
    marginBottom: height * 0.02,
    fontFamily: 'Poppins_500Medium',
    color: '#1D252D',
    fontSize:15,
  },
  correctAnswerLabel: {
    fontSize: width * 0.035,
    fontFamily: 'Poppins_500Medium',
    color: '#1D252D',
    marginBottom: height * 0.005,
  },
  correctAnswerBox: {
    backgroundColor: '#EDF4FF',
    padding: width * 0.03,
    borderRadius: 8,
  },
  correctAnswerText: {
    color: '#0F61E1',
    fontFamily: 'Poppins_700Bold',
  },
  explanationSection: {
    marginBottom: height * 0.02,
  },
  explanationTitle: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins_700Bold',
    marginBottom: height * 0.01,
  },
  explanationText: {
    fontSize: width * 0.035,
    fontFamily: 'Poppins_400Regular',
    color: '#666666',
  },
  navButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prevButton: {
    backgroundColor: '#E5E5E5',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    borderRadius: 8,
    flex: 1,
    marginRight: width * 0.02,
  },
  prevButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: width * 0.04,
    fontFamily: 'Poppins_600SemiBold',
  },
  nextButton: {
    backgroundColor: '#0F61E1',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.06,
    borderRadius: 8,
    flex: 1,
  },
  nextButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: width * 0.04,
    fontFamily: 'Poppins_600SemiBold',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8, // Mengatur lebar container relatif terhadap lebar layar
  },
  circle: {
    width: width * 0.08, // 8% dari lebar layar untuk ukuran lingkaran
    height: width * 0.08, // 8% dari lebar layar untuk tinggi lingkaran
    borderRadius: (width * 0.08) / 2, // Membuat lingkaran dengan border radius setengah dari lebar/tinggi
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    /* shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Untuk Android */
    borderWidth: 1,
    borderColor: '#E7EBEE',
  },
  circleText: {
    fontSize: width * 0.035, // 3.5% dari lebar layar untuk ukuran teks
    color: '#A0A0A0',
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default styles;