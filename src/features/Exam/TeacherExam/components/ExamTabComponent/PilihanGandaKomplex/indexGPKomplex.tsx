import React, {useState} from 'react';
import {
  Image,
  View,
  FlatList,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Colors from '@constants/colors';
import {StepperQuestion} from '@components/atoms/StepperQuestion';
import IconPlusWhite from '@assets/svg/ic_plus_white.svg';
import {IcEditNew, IcUpNew, IcDownNew} from '@assets/images';
import useCreateQuestionKp from '../BuatSoalSendiri/useCreateQuestion';
import {InputText, PoppinsText} from '@components/atoms';
import {TouchableOpacity} from '@gorhom/bottom-sheet';

const ExpandableListItem = ({item}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.itemContainer}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <PoppinsText
          style={{
            backgroundColor: '#F5F7F9',
            borderRadius: 10,
            borderWidth: 1,
            fontFamily: 'Poppins-SemiBold',
            borderColor: '#fff',
            textAlign: 'center',
            color: '#000',
            marginRight: 10,
            paddingTop: 5,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          3{' '}
        </PoppinsText>
        <PoppinsText style={{color: '#0055B8', textAlign: 'center'}}>
          Soal 03.
        </PoppinsText>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={IcEditNew}
            style={{
              backgroundColor: '#EFF7FF',
              width: 28,
              height: 28,
              alignSelf: 'center',
              marginVertical: 10,
              borderRadius: 50,
            }}
          />

          <TouchableOpacity
            onPress={toggleExpand}
            //   onPress = {() => {
            //     setExpanded(!expanded);
            // }}

            style={styles.itemTouchable}>
            {/* <Text style={styles.itemTitle}> {item.title} </Text>  */}

            <Image
              source={IcDownNew}
              style={{
                marginLeft: 10,
                backgroundColor: '#EFF7FF',
                width: 28,
                height: 28,
                alignSelf: 'center',
                marginVertical: 10,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>

          {expanded && (
            <Image
              source={IcUpNew}
              style={{
                marginLeft: 10,
                backgroundColor: '#EFF7FF',
                width: 28,
                height: 28,
                alignSelf: 'center',
                marginVertical: 10,
                borderRadius: 50,
              }}
            />
          )}
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.submitContainer}> Pilihan Ganda </Text>
          <Text style={styles.submitContainer}> Bobot Nilai : 10</Text>
          <Text style={styles.submitContainer}> Tingkat Kesulitan : Mudah</Text>
        </ScrollView>
      </View>

      <PoppinsText>{item.title}</PoppinsText>

      {expanded &&
        item.sub_content.map((item, key) => (
          <View style={{marginTop: 5}} key={key}>
            {/* onPress={() => alert('Id: ' + item.id + ' val: ' + item.soal)} */}
            <View>
              <View style={styles.itemPilihanGanda}>
                <PoppinsText>
                  <PoppinsText style={{color: '#0055B8'}}>
                    {item.nomor}.{' '}
                  </PoppinsText>{' '}
                  {item.soal}
                </PoppinsText>
              </View>
            </View>
          </View>
        ))}

      {expanded && (
        <View>
          <View
            style={{
              marginTop: 10,
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <PoppinsText style={{fontWeight: 'bold', marginTop: 20}}>
            Jawaban Benar
          </PoppinsText>
        </View>
      )}

      {expanded &&
        item.answer.map((item, key) => (
          <PoppinsText style={styles.submitJawaban} key={key}>
            {item.jawaban}
          </PoppinsText>
        ))}

      {expanded && (
        <View>
          <PoppinsText style={{fontWeight: 'bold', marginTop: 20}}>
            Pembahasan
          </PoppinsText>
          <PoppinsText style={styles.itemContent}> {item.content} </PoppinsText>
        </View>
      )}
    </View>
  );
};

const ExpandableList = ({data}) => {
  const renderItem = ({item}) => <ExpandableListItem item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const PgKompleks = () => {
  const onPress_stepper = () => setValue(prevCount => prevCount + 1);
  const [totalQuestion = 0, setValue] = useState(0);

  const {currentQuestion = 1, _handlerStepper} = useCreateQuestionKp();

  const data = [
    {
      id: 1,
      title:
        'Open 1 Berikut ini yang bukan merupakan konsep dasar yang mendasari penyusunan prinsip akuntansi adalah .....',
      content:
        "Prinsip-prinsip hukum perdagangan dalam ketentuan WTO yang sesuai dengan ketentuan syari'ah adalah national treatment, freer tradef fair competition, special and differential treatment, dan transperancy",
      sub_content: [
        {
          id: 1,
          nomor: 'A',
          soal: '12 Buah',
        },
        {
          id: 2,
          nomor: 'B',
          soal: '8 Buah',
        },
        {
          id: 4,
          nomor: 'C',
          soal: '6 Buah',
        },
        {
          id: 5,
          nomor: 'D',
          soal: '4 Buah',
        },
      ],
      answer: [
        {
          nomor: 'A',
          jawaban: '12 Buah',
        },
        {
          nomor: 'B',
          jawaban: '8 Buah',
        },
      ],
    },
    {
      id: 2,
      title:
        'Berikut ini yang bukan merupakan konsep dasar yang mendasari penyusunan prinsip akuntansi adalah .....',
      content:
        "Prinsip-prinsip hukum perdagangan dalam ketentuan WTO yang sesuai dengan ketentuan syari'ah adalah national treatment, freer tradef fair competition, special and differential treatment, dan transperancy",
      sub_content: [
        {
          id: 6,
          nomor: 'A',
          soal: '12 Buah',
        },
        {
          id: 7,
          nomor: 'B',
          soal: '8 Buah',
        },
        {
          id: 8,
          nomor: 'C',
          soal: '6 Buah',
        },
        {
          id: 9,
          nomor: 'D',
          soal: '4 Buah',
        },
      ],
      answer: [
        {
          nomor: 'A',
          jawaban: '12 Buah',
        },
        {
          nomor: 'B',
          jawaban: '8 Buah',
        },
      ],
    },
  ];

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}>
        <PoppinsText>Nama Paket Soal</PoppinsText>
        <InputText
          onChangeText={() => {}}
          backgroundColor={Colors.dark.neutral10}
          placeholder="Ujian Tengah Semester"
        />
        <View
          style={{
            marginBottom: 20,
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.buttonLeftPlus}
            onPress={onPress_stepper}>
            <IconPlusWhite width={14} height={14} />
          </TouchableOpacity>
          <StepperQuestion
            totalQuestion={totalQuestion}
            currentQuestion={currentQuestion}
            onPressQuestion={(data1: any) => {
              _handlerStepper(data1);
            }}
          />
        </View>

        <ExpandableList data={data} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginTop: 5,
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#E7EBEE',
    borderWidth: 1,
    elevation: 3,
  },
  itemPilihanGanda: {
    margin: 3,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 9,
    borderColor: '#E7EBEE',
    borderWidth: 0.5,
    elevation: 1,
  },

  itemTouchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemTitle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    paddingTop: 5,
    paddingLeft: 10,
  },
  itemContent: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },

  submitContainer: {
    textAlign: 'center',
    color: '#1D252D',
    fontSize: 14,
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#F5F7F9',
    borderRadius: 10,
    borderWidth: 1,
    fontFamily: 'Poppins-SemiBold',
    borderColor: '#fff',
  },

  submitJawaban: {
    textAlign: 'center',
    color: '#0055B8',
    fontSize: 14,
    marginTop: 15,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#EFF7FF',
    borderRadius: 10,
    borderWidth: 1,
    fontFamily: 'Poppins-SemiBold',
    borderColor: '#fff',
  },

  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttonLeftPlus: {
    backgroundColor: Colors.primary.light1,
    borderRadius: 10,
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },

  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
});

export default PgKompleks;
