import React, {FC, useMemo, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CircleIcon from '@components/atoms/CircleIcon';
import IcChevronUp from '@assets/svg/ic24_chevron_up_blue.svg';
import IcChevronDown from '@assets/svg/ic24_chevron_down_blue.svg';
import {Checkbox, MainView} from '@components/atoms';
import {FlatList} from 'react-native-gesture-handler';
import useDidMountEffect from '@hooks/useDidmountEffect';
import {PoppinsText} from '@components/atoms/Poppins';
import {ParticipantItemPeserta} from '@features/Exam/TeacherExam/createUjian/PriviewUjian/PesertaNewUjian/ParticipantItemPeserta';

type Props = {
  title?: string;
  dropdownTitle?: string;
  type?: 'headerCard' | 'collapseCard';
  isCollapse?: boolean;
  setIsCollapse?: VoidCallBack;
  participants?: any[];
  onParticipantsChange?: CallBackWithParams<void, any[]>;
};

const SeparatorComponent = () => <MainView marginVertical={8} />;

const ComponentPeserta: FC<Props> = ({
  title = 'Peserta Ujian',
  dropdownTitle,
  type = 'headerCard',
  participants = [],
  isCollapse,
  setIsCollapse,
  onParticipantsChange,
}) => {
  const [tempParticipants, setTempParticipants] = useState(participants || []);
  const isSelectAll = useMemo(
    () => tempParticipants.length === participants?.length,
    [tempParticipants, participants],
  );

  useDidMountEffect(() => {
    onParticipantsChange?.(tempParticipants);
  }, [tempParticipants]);

  const onParticipantTap = (participant: any) => {
    setTempParticipants(tempParticipants.pushOrRemove(participant));
  };

  const isParticipantSelected = (participant: any) =>
    tempParticipants.some(_participant => _participant === participant);

  const onSelectAllParticipant = () => {
    if (!isSelectAll) {
      setTempParticipants(participants);
      return;
    }

    setTempParticipants([]);
  };

  return (
    <View
      style={{
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        elevation: 2,
      }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {type === 'collapseCard' && (
          <CircleIcon
            icon={isCollapse ? <IcChevronDown /> : <IcChevronUp />}
            onPress={() => setIsCollapse?.()}
          />
        )}
      </View>
      <View style={styles.dropdownContainer}>
        {type === 'collapseCard' && (
          <Checkbox
            isChecked={isSelectAll}
            containerStyle={styles.dropdownChecboxContainer}
            onPress={onSelectAllParticipant}
          />
        )}
        <PoppinsText style={styles.dropdownTitle}>{dropdownTitle}</PoppinsText>
        <MainView flex={1} />
      </View>

      <View style={{backgroundColor: '#fff'}}>
        <FlatList
          ItemSeparatorComponent={SeparatorComponent}
          contentContainerStyle={styles.participantContainer}
          data={!isCollapse ? participants : []}
          renderItem={({item: data}) => (
            <ParticipantItemPeserta
              data={data}
              onPress={() => onParticipantTap(data)}
              isSelected={isParticipantSelected(data)}
            />
          )}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export {ComponentPeserta};
