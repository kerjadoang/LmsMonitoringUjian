import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CircleIcon from '@components/atoms/CircleIcon';
import IcChevronUp from '@assets/svg/ic24_chevron_up_blue.svg';
import IcChevronDown from '@assets/svg/ic24_chevron_down_blue.svg';
import {MainView} from '@components/atoms';
import {FlatList} from 'react-native-gesture-handler';
import useDidMountEffect from '@hooks/useDidmountEffect';
import {ParticipantItemPeserta} from '@features/Exam/TeacherExam/createUjian/PriviewUjian/PesertaNewUjian/ParticipantItemPeserta';

type Props = {
  title?: string;
  soal?: string;
  jawaban?: string;
  dropdownTitle?: string;
  type?: 'headerCard' | 'collapseCard';
  isCollapse?: boolean;
  setIsCollapse?: VoidCallBack;
  participants?: any[];
  onParticipantsChange?: CallBackWithParams<void, any[]>;
};

const SeparatorComponent = () => <MainView marginVertical={8} />;

const ComponentSoal: FC<Props> = ({
  soal = '',
  jawaban = '',
  type = 'headerCard',
  participants = [],
  isCollapse,
  setIsCollapse,
  onParticipantsChange,
}) => {
  const [tempParticipants, setTempParticipants] = useState(participants || []);

  useDidMountEffect(() => {
    onParticipantsChange?.(tempParticipants);
  }, [tempParticipants]);

  const onParticipantTap = (participant: any) => {
    setTempParticipants(tempParticipants.pushOrRemove(participant));
  };

  const isParticipantSelected = (participant: any) =>
    tempParticipants.some(_participant => _participant === participant);

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
        {/* <Text style={styles.title}>{title}</Text> */}
        <Text>{soal}</Text>
        {type === 'collapseCard' && (
          <CircleIcon
            icon={isCollapse ? <IcChevronDown /> : <IcChevronUp />}
            onPress={() => setIsCollapse?.()}
          />
        )}
      </View>
      <View style={{backgroundColor: '#fff'}}>
        <>
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

          <Text>{jawaban}</Text>
        </>
      </View>
    </View>
  );
};

export {ComponentSoal};
