import {View, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {Checkbox, InputText, PoppinsText} from '@components/atoms';
import Colors from '@constants/colors';
import IcInfoBlue from '@assets/svg/ic24_blue_info.svg';
import IcTimeBlue from '@assets/svg/ic16_clock.svg';
import IcNotesBlue from '@assets/svg/ic_notes_checklist.svg';
import ChevronDownBlue from '@assets/svg/ic24_chevron_down_blue.svg';
import {IcCheckboxGreyNew} from '@assets/images';

const DetailNewUjian = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{gap: 16, padding: 7}}>
        {/* {HeaderComponent} */}
        <View style={styles.sectionContainer}>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
            }}>
            <IcInfoBlue />
            <PoppinsText
              type="BoldPoppins"
              style={{color: Colors.primary.base, fontSize: 16}}>
              Info Detail
            </PoppinsText>
          </View>
          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Nama Ujian</PoppinsText>

            <InputText
              onChangeText={() => {}}
              value={'UTS - Biologi - SMP Santa Maria...'}
              editable={false}
              backgroundColor={Colors.dark.neutral10}
              // errorMessage={errors?.title?.message}
              // placeholder="Masukkan Nama Ujian"
              disabledRightIcon
            />
          </View>

          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Tipe Ujian</PoppinsText>

            <InputText
              onChangeText={() => {}}
              editable={false}
              // value={value?.name}
              value={'Ujian Tengah Semester'}
              // errorMessage={
              //   errors?.question_package_service?.message as any
              // }
              // onPress={() => setInputServiceVisible(true)}
              backgroundColor={Colors.dark.neutral10}
              // placeholder="Pilih Tipe Ujian"
              // rightIcon={ChevronDown}
              disabledRightIcon
            />
          </View>

          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Kelas</PoppinsText>

            <InputText
              onChangeText={() => {}}
              editable={false}
              // value={joinRombelClass('name')}
              value={'Kelas 8-B, 8-C'}
              // errorMessage={
              //   errors?.list_rombel_class_school?.message as any
              // }
              // onPress={() => setInputClassVisible(true)}
              backgroundColor={Colors.dark.neutral10}
              disabledRightIcon
              // placeholder="Pilih Kelas"
              // rightIcon={ChevronDown}
            />
          </View>

          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Mata Pelajaran</PoppinsText>

            <InputText
              onChangeText={() => {}}
              editable={false}
              value={'Biologi'}
              backgroundColor={Colors.dark.neutral10}
              // value={value?.name}
              // errorMessage={errors?.subject?.message as any}
              // onPress={
              //   isRombelClassValid && curriculum
              //     ? () => setInputSubjectVisible(true)
              //     : () => {}
              // // }
              // backgroundColor={
              //   isRombelClassValid && curriculum
              //     ? Colors.dark.neutral10
              //     : Colors.dark.neutral20
              // }
              // placeholder="Pilih Mata Pelajaran"
              // rightIcon={ChevronDown}
              // disabledRightIcon
            />
          </View>

          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Kurikulum</PoppinsText>

            <InputText
              onChangeText={() => {}}
              editable={false}
              value={'Kurikulum Merdeka'}
              // value={value?.name}
              // errorMessage={errors?.curriculum?.message as any}
              // onPress={() => setInputCurriculumVisible(true)}
              backgroundColor={Colors.dark.neutral10}
              // placeholder="Pilih Kurikulum"
              // rightIcon={ChevronDown}
              // disabledRightIcon
            />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
            }}>
            <IcTimeBlue />
            <PoppinsText
              type="BoldPoppins"
              style={{color: Colors.primary.base, fontSize: 16}}>
              Jadwal & Waktu
            </PoppinsText>
          </View>

          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Hari & Tanggal</PoppinsText>

            <InputText
              onChangeText={() => {}}
              editable={false}
              value={'Senin, 13 Juli 2024'}
              // value={value?.name}
              // errorMessage={errors?.curriculum?.message as any}
              // onPress={() => setInputCurriculumVisible(true)}
              backgroundColor={Colors.dark.neutral10}
              // placeholder="Pilih Kurikulum"
              // rightIcon={ChevronDown}
              // disabledRightIcon
            />
          </View>

          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Waktu</PoppinsText>

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <InputText
                  onChangeText={() => {}}
                  editable={false}
                  value={'09:00'}
                  // value={value?.name}
                  // errorMessage={errors?.curriculum?.message as any}
                  // onPress={() => setInputCurriculumVisible(true)}
                  backgroundColor={Colors.dark.neutral10}
                  // placeholder="Pilih Kurikulum"
                  // rightIcon={ChevronDown}
                  // disabledRightIcon
                />
              </View>

              <PoppinsText
                style={{
                  fontSize: 24,
                  fontFamily: 'PoppinsBold',
                  marginTop: 15,
                  marginLeft: 10,
                  marginRight: 10,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                -
              </PoppinsText>

              <View style={{flex: 1}}>
                <InputText
                  onChangeText={() => {}}
                  editable={false}
                  value={'10:00'}
                  // value={value?.name}
                  // errorMessage={errors?.curriculum?.message as any}
                  // onPress={() => setInputCurriculumVisible(true)}
                  backgroundColor={Colors.dark.neutral10}
                  // placeholder="Pilih Kurikulum"
                  // rightIcon={ChevronDown}
                  // disabledRightIcon
                />
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <PoppinsText style={styles.label}>Zona Waktu</PoppinsText>

            <InputText
              onChangeText={() => {}}
              editable={false}
              value={'WIB - Waktu Indonesia Barat'}
              // value={value?.name}
              // errorMessage={errors?.curriculum?.message as any}
              // onPress={() => setInputCurriculumVisible(true)}
              backgroundColor={Colors.dark.neutral10}
              // placeholder="Pilih Kurikulum"
              rightIcon={ChevronDownBlue}
              disabledRightIcon
            />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.rulesContainer}>
            <IcNotesBlue />
            <PoppinsText
              type="BoldPoppins"
              style={{color: Colors.primary.base, fontSize: 16}}>
              Peraturan Ujian
            </PoppinsText>
          </View>
          <View style={styles.rulesInformation}>
            <View style={styles.rulesItemContainer}>
              <Checkbox
                height={20}
                width={20}
                isChecked
                containerStyle={{marginTop: 1}}
              />
              <View style={styles.rulesItem}>
                <PoppinsText style={{marginBottom: 4}} type="BoldPoppins">
                  Aktifkan lock screen
                </PoppinsText>
                <PoppinsText>
                  Murid akan menerima blocker apabila mencoba melanggar
                  peraturan ujian.
                </PoppinsText>
              </View>
            </View>

            <PoppinsText
              style={{marginBottom: 4, marginTop: 20}}
              type="BoldPoppins">
              Desktop
            </PoppinsText>

            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                marginTop: 10,
              }}>
              <Image
                source={IcCheckboxGreyNew}
                style={{width: 20, height: 20}}
              />
              <View style={styles.rulesItem}>
                <PoppinsText>Tidak boleh membuka tab baru</PoppinsText>
              </View>
            </View>

            <View style={{flexDirection: 'row', gap: 10}}>
              <Image
                source={IcCheckboxGreyNew}
                style={{width: 20, height: 20}}
              />
              <View style={styles.rulesItem}>
                <PoppinsText>Tidak boleh membuka jendela</PoppinsText>
              </View>
            </View>

            <View style={{flexDirection: 'row', gap: 10}}>
              <Image
                source={IcCheckboxGreyNew}
                style={{width: 20, height: 20}}
              />
              <View style={styles.rulesItem}>
                <PoppinsText>Tidak boleh membuka jendela</PoppinsText>
              </View>
            </View>

            <PoppinsText
              style={{marginBottom: 4, marginTop: 20}}
              type="BoldPoppins">
              Mobile
            </PoppinsText>

            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                marginTop: 10,
              }}>
              <Image
                source={IcCheckboxGreyNew}
                style={{width: 20, height: 20}}
              />
              <View style={styles.rulesItem}>
                <PoppinsText>Tidak boleh membuka tab baru</PoppinsText>
              </View>
            </View>

            <View style={{flexDirection: 'row', gap: 10}}>
              <Image
                source={IcCheckboxGreyNew}
                style={{width: 20, height: 20}}
              />
              <View style={styles.rulesItem}>
                <PoppinsText>Tidak boleh membuka jendela</PoppinsText>
              </View>
            </View>

            <View style={{flexDirection: 'row', gap: 10}}>
              <Image
                source={IcCheckboxGreyNew}
                style={{width: 20, height: 20}}
              />
              <View style={styles.rulesItem}>
                <PoppinsText>Tidak boleh membuka jendela</PoppinsText>
              </View>
            </View>
          </View>

          <View style={styles.rulesInformation}>
            <View style={styles.rulesItemContainer}>
              <Checkbox
                height={20}
                width={20}
                isChecked
                containerStyle={{marginTop: 1}}
              />
              <View style={styles.rulesItem}>
                <PoppinsText style={{marginBottom: 4}} type="BoldPoppins">
                  Tampilkan nilai setelah waktu ujian selesai
                </PoppinsText>
                <PoppinsText>
                  Murid akan bisa melihat nilai ujian setelah ujian selesai.
                </PoppinsText>
              </View>
            </View>
          </View>
        </View>
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
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    gap: 22,
    paddingHorizontal: 16,
    paddingVertical: 24,
    elevation: 2,
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
});

export default DetailNewUjian;
