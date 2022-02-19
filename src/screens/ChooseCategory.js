import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {TextButton} from '../components';
import {COLORS, SIZES, FONTS} from '../constants';
import icons from '../constants/icons';
import {IconButton} from '../components';

const categories = [
  {
    cid: 19,
    name: 'Math',
    icons: icons.math,
  },
  {
    cid: 21,
    name: 'Sport',
    icons: icons.sport,
  },
  {
    cid: 18,
    name: 'Science',
    icons: icons.science,
  },
  {
    cid: 25,
    name: 'Art',
    icons: icons.art,
  },
  {
    cid: 23,
    name: 'History',
    icons: icons.history,
  },
  {
    cid: 12,
    name: 'Music',
    icons: icons.music,
  },
  {
    cid: 28,
    name: 'Tech',
    icons: icons.tech,
  },
  {
    cid: 26,
    name: 'Geography',
    icons: icons.travel,
  },
];

const CategoryItem = ({item, index, selectedCategory, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor:
          item.cid == selectedCategory?.cid ? COLORS.pink : COLORS.gray5,
        borderRadius: 20,
        paddingVertical: SIZES.space_4,
        marginVertical: SIZES.space_2,
        marginLeft: index % 2 == 1 ? SIZES.space_2 : 0,
        marginRight: index % 2 == 0 ? SIZES.space_2 : 0,
      }}
      activeOpacity={0.6}
      onPress={onPress}>
      <View
        style={{
          width: 48,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:
            item.cid == selectedCategory?.cid ? COLORS.accent1 : COLORS.white,
          borderRadius: SIZES.space_4,
        }}>
        <Image
          source={item.icons}
          resizeMode="contain"
          style={{
            width: 28.8,
            height: 28.8,
            tintColor:
              item.cid == selectedCategory?.cid ? COLORS.white : COLORS.primary,
          }}
        />
      </View>
      <Text
        style={{
          ...FONTS.bodyBaseMedium,
          color: COLORS.primary,
          marginTop: SIZES.space_2,
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const ChooseCategory = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: SIZES.space_4,
          paddingVertical: SIZES.space_2,
        }}>
        <IconButton
          icon={icons.arrow_left}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
          }}>
          Choose Category
        </Text>
        <View style={{width: 24}} />
      </View>
    );
  }

  function renderCategories() {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          marginHorizontal: SIZES.space_2,
          padding: SIZES.space_4,
          borderRadius: 32,
        }}>
        <FlatList
          numColumns={2}
          horizontal={false}
          data={categories}
          listKey="ChooseCategory"
          keyExtractor={item => `ChooseCategory-${item.cid}`}
          renderItem={({item, index}) => (
            <CategoryItem
              item={item}
              index={index}
              selectedCategory={selectedCategory}
              onPress={() => setSelectedCategory(item)}
            />
          )}
          ListFooterComponent={() => (
            <TextButton
              label="Main"
              containerStyle={{
                paddingVertical: SIZES.space_4,
                borderRadius: 20,
                marginTop: 12,
                backgroundColor:
                  selectedCategory == null ? COLORS.secondary : COLORS.primary,
              }}
              disabled={selectedCategory == null ? true : false}
              onPress={() =>
                navigation.navigate('Quiz', {category: selectedCategory})
              }
            />
          )}
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

      {/* Categories */}
      {renderCategories()}
    </View>
  );
};

export default ChooseCategory;
