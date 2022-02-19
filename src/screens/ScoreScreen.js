import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {IconButton, TextButton} from '../components';
import {COLORS, FONTS, SIZES} from '../constants';
import icons from '../constants/icons';
import images from '../constants/images';

const DetailItem = ({label, value, containerStyle}) => {
  return (
    <View
      style={{
        width: SIZES.width / 2 - SIZES.space_6,
        ...containerStyle,
      }}>
      <Text
        style={{
          ...FONTS.bodyXSMedium,
          color: COLORS.gray2,
        }}>
        {label}
      </Text>
      <Text
        style={{
          ...FONTS.bodyXLMedium,
          color: COLORS.black,
        }}>
        {value}
      </Text>
    </View>
  );
};

const ScoreScreen = ({navigation, route}) => {
  const {category, score, correctAnswer, inCorrectAnswer} = route.params;

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{width: 24}} />
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
          }}>
          Score
        </Text>
        <IconButton
          icon={icons.close}
          iconStyle={{tintColor: COLORS.black}}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  function renderContent() {
    return (
      <View
        style={{
          marginTop: SIZES.space_4,
        }}>
        {/* Image */}
        <ImageBackground
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.pink,
            paddingVertical: SIZES.space_6,
            borderRadius: 20,
          }}>
          <Image
            source={images.cup}
            resizeMode="contain"
            style={{
              width: SIZES.width - 56 * 2 - SIZES.space_4 * 2,
              marginHorizontal: 56,
            }}
          />
          <Text
            style={{
              ...FONTS.bodyBaseMedium,
              color: COLORS.white,
              marginTop: SIZES.space_2,
            }}>
            You get +{score} Quiz Points
          </Text>
        </ImageBackground>

        {/* Details */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.space_6,
            paddingHorizontal: SIZES.space_2,
          }}>
          <DetailItem label="CORRECT ANSWER" value={correctAnswer} />
          <DetailItem label="INCORRECT ANSWER" value={inCorrectAnswer} />
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.space_6,
        }}>
        <TextButton
          label="Back to home"
          labelStyle={{
            color: COLORS.primary,
          }}
          containerStyle={{
            flex: 1,
            marginRight: SIZES.space_2,
            paddingVertical: SIZES.space_4,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            borderWidth: 1,
            borderColor: COLORS.secondary,
          }}
          onPress={() => navigation.navigate('Home')}
        />
        <TextButton
          label="Play again"
          containerStyle={{
            flex: 1,
            marginRight: SIZES.space_2,
            paddingVertical: SIZES.space_4,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Quiz', {category})}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.space_4,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* Content */}
      {renderContent()}

      {/* Button */}
      {renderButton()}
    </View>
  );
};

export default ScoreScreen;
