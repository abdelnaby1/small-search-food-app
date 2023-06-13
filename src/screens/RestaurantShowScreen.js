import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({navigation}) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');
  const getRestaurantDetail = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getRestaurantDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!restaurant) {
    return null;
  }
  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.imageStyle} source={{uri: item}} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 200,
  },
});
export default RestaurantShowScreen;
