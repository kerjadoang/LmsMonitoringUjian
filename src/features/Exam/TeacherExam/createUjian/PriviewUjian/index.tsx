import {PoppinsText, Button} from '@components/atoms';
import Colors from '@constants/colors';
import React, {ReactNode} from 'react';
import {SafeAreaView, View, useWindowDimensions, Image} from 'react-native';
import {ms} from 'react-native-size-matters';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import DetailNewUjian from './DetailNewUjian';
import PesertaNewUjian from './PesertaNewUjian';
import SoalNewUjian from './SoalNewUjian';
import {IcEditNew} from '@assets/images';

type Props = {
  HeaderComponent: ReactNode;
  nextStep: () => void;
  prevStep: () => void;
};

const renderScene = SceneMap({
  'Detail Ujian': DetailNewUjian,
  'Peserta Ujian': PesertaNewUjian,
  Soal: SoalNewUjian,
});

const renderTabBar = (props: any) => (
  <TabBar
    scrollEnabled={true}
    tabStyle={{width: ms(122)}}
    {...props}
    indicatorStyle={{
      backgroundColor: Colors.primary.base,
      height: ms(4),
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    }}
    style={{backgroundColor: Colors.white}}
    renderLabel={({route, focused}) => (
      <PoppinsText
        type="SemiBoldPoppins"
        style={{
          color: focused ? Colors.primary.base : Colors.dark.neutral80,
          fontSize: ms(14),
        }}>
        {route.title}
      </PoppinsText>
    )}
  />
);

export default function PriviewUjian({HeaderComponent}: Props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Detail Ujian', title: 'Detail Ujian'},
    {key: 'Peserta Ujian', title: 'Peserta'},
    {key: 'Soal', title: 'Soal'},
  ]);

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <View style={{padding: 16}}>{HeaderComponent}</View>
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <PoppinsText
          type="SemiBoldPoppins"
          style={{fontSize: ms(20), padding: ms(16)}}>
          Preview Jadwal Ujian
        </PoppinsText>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Button
            label="Kumpulkan"
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.primary.base,
              borderRadius: 30,
              marginRight: 10,
              marginLeft: 10,
            }}
            fontSize={13}
            action={() => {
              // alert('Audio: ')
            }}
          />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.primary.light3,
              borderRadius: 30,
              marginRight: 10,
              marginLeft: 10,
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

            <PoppinsText
              style={{color: Colors.primary.base, fontFamily: 'Poppins-Bold'}}>
              Ubah
            </PoppinsText>
          </View>
        </View>

        <TabView
          renderTabBar={renderTabBar}
          swipeEnabled={false}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          sceneContainerStyle={{paddingHorizontal: ms(16), paddingTop: ms(16)}}
        />
      </View>
    </SafeAreaView>
  );
}
