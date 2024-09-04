import {View, StyleSheet, ScrollView, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import Colors from '@constants/colors';
import {PoppinsText} from '@components/atoms';
import {IcEditNew, IcDownNew, IcBagikanNew, IcSoalNew} from '@assets/images';
import {TouchableOpacity} from '@gorhom/bottom-sheet';

const ExpandableListItem = ({item}: {item: any}) => {
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
        </View>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PoppinsText style={styles.submitContainer}>
            {' '}
            Pilihan Ganda{' '}
          </PoppinsText>
          <PoppinsText style={styles.submitContainer}>
            {' '}
            Bobot Nilai : 10
          </PoppinsText>
          <PoppinsText style={styles.submitContainer}>
            {' '}
            Tingkat Kesulitan : Mudah
          </PoppinsText>
        </ScrollView>
      </View>
      <PoppinsText>{item.title}</PoppinsText>
      {expanded &&
        item.sub_content.map((val: any, key: number) => (
          <View style={{marginTop: 5}} key={key}>
            <View>
              <View style={styles.itemPilihanGanda}>
                <PoppinsText>
                  <PoppinsText style={{color: '#0055B8'}}>
                    {val.nomor}.{' '}
                  </PoppinsText>{' '}
                  {val.soal}
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

          <PoppinsText style={styles.submitJawaban}>
            {' '}
            {item.jawaban}{' '}
          </PoppinsText>

          <PoppinsText style={{fontWeight: 'bold', marginTop: 20}}>
            Pembahasan
          </PoppinsText>

          <PoppinsText style={styles.itemContent}> {item.content} </PoppinsText>
        </View>
      )}
    </View>
  );
};

const ExpandableList = ({data}: {data: any}) => {
  const renderItem = ({item}: {item: any}) => (
    <ExpandableListItem item={item} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const SoalNewUjian = () => {
  const data = [
    {
      id: 1,
      title:
        'Open 1 Berikut ini yang bukan merupakan konsep dasar yang mendasari penyusunan prinsip akuntansi adalah .....',
      content:
        "Prinsip-prinsip hukum perdagangan dalam ketentuan WTO yang sesuai dengan ketentuan syari'ah adalah national treatment, freer tradef fair competition, special and differential treatment, dan transperancy",
      sub_content: [
        {
          id: 12,
          nomor: 'A',
          soal: 'tanya 1',
        },
        {
          id: 13,
          nomor: 'B',
          soal: 'tanya 2',
        },
      ],
      jawaban: 'Prinsip Dagang',
    },
    {
      id: 2,
      title:
        'Berikut ini yang bukan merupakan konsep dasar yang mendasari penyusunan prinsip akuntansi adalah .....',
      content:
        "Prinsip-prinsip hukum perdagangan dalam ketentuan WTO yang sesuai dengan ketentuan syari'ah adalah national treatment, freer tradef fair competition, special and differential treatment, dan transperancy",
      sub_content: [
        {
          id: 22,
          soal: 'tanya 1',
        },
        {
          id: 25,
          soal: 'tanya 2',
        },
      ],

      jawaban: 'Prinsip Dagang',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{gap: 16, padding: 7}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <PoppinsText
            style={{
              fontFamily: 'Poppins-Bold',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
            }}>
            Tampilan Soal
          </PoppinsText>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.primary.light3,
              borderRadius: 30,
            }}>
            <Image
              source={IcBagikanNew}
              style={{
                backgroundColor: '#EFF7FF',
                width: 24,
                height: 24,
                alignSelf: 'center',
                marginVertical: 10,
                borderRadius: 50,
              }}
            />
            <PoppinsText
              style={{
                marginLeft: 10,
                color: Colors.primary.base,
                fontFamily: 'Poppins-Bold',
              }}>
              Bagikan soal{' '}
            </PoppinsText>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5F7F9',
            borderRadius: 30,
            width: 150,
          }}>
          <Image
            source={IcSoalNew}
            style={{
              backgroundColor: '#EFF7FF',
              width: 24,
              height: 24,
              alignSelf: 'center',
              marginVertical: 10,
              borderRadius: 50,
            }}
          />
          <PoppinsText
            style={{marginLeft: 10, color: '#000', fontFamily: 'Poppins-Bold'}}>
            50 Soal
          </PoppinsText>
        </View>
        <PoppinsText style={{color: '#000'}}>
          30 Pilihan Ganda ∙ 10 Pilihan Ganda Kompleks
        </PoppinsText>
        <ExpandableList data={data} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeupContainer: {
    padding: 16,
    alignItems: 'flex-end',
  },
  rulesSectionContainer: {
    marginBottom: 12,
    flexDirection: 'row',
    gap: 20,
  },
  rulesItem: {flex: 1, marginBottom: 5},
  rulesItemContainer: {
    flexDirection: 'row',
    gap: 12,
    // borderBottomWidth: 1,
    // borderColor: Colors.dark.neutral40,
  },
  rulesInformation: {
    backgroundColor: Colors.dark.neutral10,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  rulesContainer: {flexDirection: 'row', gap: 12},
  container: {
    flex: 1,
    // backgroundColor: Colors.primary.background,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    gap: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    color: Colors.dark.neutral100,
  },
  sublabel: {
    fontSize: 12,
    color: Colors.dark.neutral60,
  },
  inputContainer: {gap: 8},
  radioInput: {flexDirection: 'row', alignItems: 'center', gap: 10},
  helperText: {
    color: Colors.danger.base,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },

  //   container: {
  //     flex: 1,
  //     backgroundColor: "#f5f5f5",
  //     padding: 20,
  // },
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
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#E7EBEE',
    borderWidth: 1,
    elevation: 3,
  },
  itemPilihanGanda: {
    marginBottom: 15,
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

export default SoalNewUjian;
