import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import RestaurantDetail from './RestaurantDetail';
import {withNavigation} from 'react-navigation';

const RestaurantsList = ({title, restaurants, navigation}) => {
  if (!restaurants.length) {
    return null;
  }
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Restaurant', {id: item.id})}>
              <RestaurantDetail item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});
export default withNavigation(RestaurantsList);
