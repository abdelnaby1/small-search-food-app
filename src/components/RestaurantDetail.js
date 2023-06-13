import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const RestaurantDetail = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: item.image_url}} />
      <Text style={styles.nameStyle}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});
export default RestaurantDetail;
