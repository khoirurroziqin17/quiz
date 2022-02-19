import React from 'react';
import {Text, ImageBackground, Image} from 'react-native';
import images from '../constants/images';
import {SIZES, FONTS, COLORS} from '../constants';
import {TextButton} from '../components';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={images.bg}
      resizeMode="cover"
      style={{
        flex: 1,
        alignItems: 'center',
        width: SIZES.width,
      }}>
      <Image
        source={images.human}
        resizeMode="contain"
        style={{
          flex: 1,
          width: '60%',
        }}
      />
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.white,
          width: SIZES.width,
          paddingHorizontal: SIZES.space_6,
          marginHorizontal: SIZES.space_4,
          marginVertical: SIZES.space_6 * 2,
          textAlign: 'center',
        }}>
        Find quizzes to test out your knowledge
      </Text>
      <TextButton
        label="Mulai"
        containerStyle={{
          width: SIZES.width - SIZES.space_6 * 2,
          backgroundColor: COLORS.gray1,
          borderRadius: SIZES.space_4,
          paddingVertical: SIZES.space_4,
          marginBottom: SIZES.space_6 * 2,
        }}
        onPress={() => navigation.navigate('ChooseCategory')}
      />
    </ImageBackground>
  );
};

export default HomeScreen;
