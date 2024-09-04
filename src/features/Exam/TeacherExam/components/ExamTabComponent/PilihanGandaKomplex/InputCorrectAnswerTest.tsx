import React from 'react';
import {Checkbox, SwipeUp, SwipeUpProps, PoppinsText} from '@components/atoms';
import Colors from '@constants/colors';
import {ICreateSoalSendiriOptionPayload} from '@services/lms/type';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {View, Text, StyleSheet} from 'react-native';

type InputCorrectAnswerProps = {
  isKompleks?: boolean;
  isChecked?: boolean;
  inputs?: ICreateSoalSendiriOptionPayload[];
  selectedVal?: any;
  onSelect?: (val: ICreateSoalSendiriOptionPayload) => void;
  selectedOption?: ICreateSoalSendiriOptionPayload;
} & SwipeUpProps;

const InputCorrectAnswerTest: React.FC<InputCorrectAnswerProps> = props => {
  return (
    <SwipeUp {...props}>
      <View style={{padding: 16, gap: 16}}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            color: Colors.dark.neutral100,
            textAlign: 'center',
          }}>
          Pilih Jawaban Benar
        </Text>

        {props.inputs?.map((item, index) => {
          return (
            <View
              style={{height: 32, width: '100%', flexDirection: 'row'}}
              key={`${index}`}>
              <PoppinsText>{item.key}</PoppinsText>

              <Checkbox
                isChecked={true}
                onPress={() => {
                  //harusnya update
                  const options = {
                    ...item,
                    key: item?.key?.toUpperCase(),
                    correct: true,
                  };

                  props.onSelect?.(options);
                }}
                containerStyle={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row-reverse',
                }}

                // selected={item.key === props.selectedOption?.key}
              />
            </View>
          );
        })}

        <TouchableOpacity style={styles.buttonSimpan}>
          <PoppinsText
            style={{color: Colors.white, fontFamily: 'Poppins-SemiBold'}}>
            {' '}
            Simpan{' '}
          </PoppinsText>
        </TouchableOpacity>
      </View>
    </SwipeUp>
  );
};

const styles = StyleSheet.create({
  buttonSimpan: {
    backgroundColor: '#007BE0',
    borderRadius: 30,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputCorrectAnswerTest;
