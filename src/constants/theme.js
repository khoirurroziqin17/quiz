import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#6A5AE0',
  secondary: '#9087E5',
  pink: '#FF8FA2',
  accent1: '#FFD6DD',
  accent2: '#C4D0FB',
  accent3: '#C9F2E9',
  black: '#0C092A',
  gray1: '#49465F',
  gray2: '#858494',
  gray3: '#CCCCCC',
  gray4: '#E6E6E6',
  gray5: '#EFEEFC',
  orange: '#FF9B57',
  green: '#53DF83',
  red: '#FF6666',
  white: '#FFFFFF',
};

export const SIZES = {
  //spacing
  space_2: 8,
  space_3: 12,
  space_4: 16,
  space_6: 24,

  //font
  h1: 32,
  h2: 28,
  h3: 24,
  body1: 20,
  body2: 18,
  body3: 16,
  body4: 14,
  body5: 12,

  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Nunito-ExtraBold', fontSize: 36},
  h3: {fontFamily: 'Rubik-Medium', fontSize: SIZES.h3, lineHeight: 36},
  bodyXLMedium: {
    fontFamily: 'Rubik-Medium',
    fontSize: SIZES.body1,
    lineHeight: 28,
  },
  bodyBaseMedium: {
    fontFamily: 'Rubik-Medium',
    fontSize: SIZES.body3,
    lineHeight: 24,
  },
  bodyBaseRegular: {
    fontFamily: 'Rubik-Regular',
    fontSize: SIZES.body3,
    lineHeight: 24,
  },
  bodySMedium: {
    fontFamily: 'Rubik-Medium',
    fontSize: SIZES.body4,
    lineHeight: 20,
  },
  bodyXSMedium: {
    fontFamily: 'Rubik-Medium',
    fontSize: SIZES.body5,
    lineHeight: 18,
  },
  bodyXSRegular: {
    fontFamily: 'Rubik-Regular',
    fontSize: SIZES.body5,
    lineHeight: 18,
  },
};
