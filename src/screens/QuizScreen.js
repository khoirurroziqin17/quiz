import React from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import icons from '../constants/icons';
import {ProgressBar, TextButton} from '../components';
import {randomListItems} from '../utils';

const IconText = ({containerStyle, icon, label}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.space_3,
        paddingVertical: 9,
        borderRadius: SIZES.space_3,
        ...containerStyle,
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />
      <Text
        style={{
          ...FONTS.bodyBaseMedium,
          color: COLORS.white,
          marginLeft: 4,
        }}>
        {label}
      </Text>
    </View>
  );
};

const LoadingIndicator = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator color={COLORS.white} />
    </View>
  );
};

const QuizScreen = ({route, navigation}) => {
  const {category} = route.params;

  const [dataQuiz, setDataQuiz] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [indexQuiz, setIndexQuiz] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [correctAnswer, setCorrectAnswer] = React.useState(0);
  const [inCorrectAnswer, setInCorrectAnswer] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const amountQuiz = 5;

  const getData = (category, amountQuiz) => {
    fetch(
      `https://opentdb.com/api.php?amount=${amountQuiz}&category=${category.cid}&type=multiple`,
    )
      .then(res => res.json())
      .then(data => setDataQuiz(data.results))
      .then(() => setIsLoading(false))
      .catch(() => {
        console.log('catch');
        setIsError(true);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    getData(category, amountQuiz);
  }, [category, amountQuiz]);

  const randomOptions = React.useMemo(() => {
    if (dataQuiz) {
      return randomListItems([
        ...dataQuiz[indexQuiz]?.incorrect_answers,
        dataQuiz[indexQuiz]?.correct_answer,
      ]);
    }
  }, [dataQuiz, indexQuiz]);

  const sendAnswer = item => {
    setSelectedOption(item);
    if (item == dataQuiz[indexQuiz]?.correct_answer) {
      setScore(score + 10);
      setCorrectAnswer(correctAnswer + 1);
    } else {
      setInCorrectAnswer(inCorrectAnswer + 1);
    }

    setTimeout(() => {
      if (indexQuiz >= amountQuiz - 1) {
        setIndexQuiz(0);
        setScore(0);
        setCorrectAnswer(0);
        setInCorrectAnswer(0);
      } else {
        setIndexQuiz(indexQuiz + 1);
      }
      setSelectedOption(null);
    }, 1000);
  };

  React.useEffect(() => {
    if (correctAnswer + inCorrectAnswer == 5) {
      navigation.navigate('Score', {
        category,
        score,
        correctAnswer,
        inCorrectAnswer,
      });
    }
  }, [correctAnswer, inCorrectAnswer]);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: SIZES.space_4,
        }}>
        {/* User */}
        <IconText
          icon={icons.user}
          label="7"
          containerStyle={{
            backgroundColor: COLORS.secondary,
          }}
        />

        {/* Progress */}
        <ProgressBar
          numberQuiz={indexQuiz + 1}
          amountQuiz={amountQuiz}
          containerStyle={{
            flex: 1,
            marginHorizontal: 32,
          }}
        />

        {/* Points */}
        <IconText
          icon={icons.puzzle}
          label={score}
          containerStyle={{
            backgroundColor: COLORS.orange,
          }}
        />
      </View>
    );
  }

  function renderQuiz() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          marginTop: SIZES.space_6,
          borderRadius: 32,
          paddingHorizontal: SIZES.space_4,
          paddingTop: SIZES.space_6,
          paddingBottom: SIZES.space_4,
        }}>
        {/* Number */}
        <Text
          style={{
            ...FONTS.bodySMedium,
            color: COLORS.gray2,
          }}>
          QUESTION {indexQuiz + 1} OF {amountQuiz}
        </Text>

        {/* Question */}
        <Text
          style={{
            ...FONTS.bodyXLMedium,
            color: COLORS.black,
            marginTop: SIZES.space_2,
          }}>
          {dataQuiz[indexQuiz].question}
        </Text>

        {/* Options */}
        <FlatList
          data={randomOptions}
          listKey="Options"
          keyExtractor={item => `Options-${item}`}
          contentContainerStyle={{
            marginTop: SIZES.space_4,
          }}
          renderItem={({item, index}) => {
            return (
              <TextButton
                label={item}
                labelStyle={{
                  ...FONTS.bodyBaseRegular,
                  color: COLORS.black,
                }}
                containerStyle={{
                  alignItems: 'flex-start',
                  paddingHorizontal: SIZES.space_6,
                  paddingVertical: SIZES.space_4,
                  borderWidth: 2,
                  borderColor:
                    item == dataQuiz[indexQuiz].correct_answer && selectedOption
                      ? COLORS.green
                      : item == selectedOption
                      ? COLORS.red
                      : COLORS.gray5,
                  borderRadius: 20,
                  marginVertical: 8,
                  backgroundColor:
                    item == dataQuiz[indexQuiz].correct_answer && selectedOption
                      ? COLORS.green
                      : COLORS.white,
                }}
                onPress={() => sendAnswer(item)}
                disabled={selectedOption ? true : false}
              />
            );
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.space_2,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* Quiz */}
      {isLoading && !isError ? (
        <LoadingIndicator />
      ) : !isLoading && !isError ? (
        renderQuiz()
      ) : (
        isError && !isLoading && <Text>ERROR!!!!</Text>
      )}
    </View>
  );
};

export default QuizScreen;
