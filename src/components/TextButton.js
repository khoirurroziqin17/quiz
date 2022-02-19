import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const TextButton = ({label, labelStyle, containerStyle, disabled, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        ...containerStyle,
      }}
      activeOpacity={0.6}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.bodyBaseMedium,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
