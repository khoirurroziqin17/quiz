import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../constants';

const ProgressBar = ({containerStyle, numberQuiz, amountQuiz}) => {
  const progress = ((numberQuiz * 100) / amountQuiz).toFixed(0);
  const progressPersen = progress + '%';

  return (
    <View
      style={{
        width: '100%',
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.accent2,
        ...containerStyle,
      }}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          height: '100%',
          width: progressPersen,
          borderRadius: 10,
          backgroundColor: COLORS.white,
        }}
      />
    </View>
  );
};

export default ProgressBar;
