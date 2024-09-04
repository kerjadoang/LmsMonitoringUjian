import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import Colors from '@constants/colors';
import {InputText, PoppinsText, MainView} from '@components/atoms';
import {ComponentPeserta} from './componentPeserta';

const mockUsers = Array(7)
  .fill(0)
  .map((e, i) => ({
    name: 'user ' + i,
    class: i,
    isSelected: false,
  }));

const mockRombelUser = Array(2)
  .fill(0)
  .map((e, i) => ({
    name: 'Kelas ' + (i + 1),
    users: mockUsers,
  }));

const SeparatorComponent = () => <MainView marginVertical={8} />;

const ComponentSoal = () => {
  const [collapsedId, setCollapsedId] = useState<string>('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{gap: 16, padding: 7}}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.white,
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 10,
            elevation: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
            }}>
            <PoppinsText type="BoldPoppins" style={{fontSize: 16}}>
              Peserta Ujian
            </PoppinsText>
          </View>

          <InputText
            onChangeText={() => {}}
            value={'Kelas 8-B, 8-C'}
            editable={false}
            backgroundColor={Colors.dark.neutral10}
            // errorMessage={errors?.title?.message}
            // placeholder="Masukkan Nama Ujian"
            disabledRightIcon
          />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={mockRombelUser}
          ItemSeparatorComponent={SeparatorComponent}
          renderItem={({item}: IFlatListItem<(typeof mockRombelUser)[0]>) => {
            const isCollapse = collapsedId !== item.name;
            return (
              <ComponentPeserta
                onParticipantsChange={_ => {}}
                isCollapse={isCollapse}
                setIsCollapse={() => {
                  if (!isCollapse) {
                    return setCollapsedId('');
                  }
                  return setCollapsedId(item.name);
                }}
                title={item.name}
                // // dropdownTitle="Semua Murid"
                type="collapseCard"
                participants={item?.users?.map(user => user?.name) ?? []}
              />
            );
          }}
        />
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
});

export default ComponentSoal;
