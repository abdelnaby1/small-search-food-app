import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();
  console.log(restaurants.length);
  const filterRestaurantsByPrice = price => {
    // price === $ || $$ || $$$
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  };

  return (
    // flex : 1 for not collapsed and takes space as much as possible
    <View style={{flex: 1}}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={value => setSearchTerm(value)}
        onSearchTermSibmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage} </Text> : null}
      <ScrollView>
        <RestaurantsList
          title="Cost Effective"
          restaurants={filterRestaurantsByPrice('$')}
        />
        <RestaurantsList
          title="Bit Pricier"
          restaurants={filterRestaurantsByPrice('$$')}
        />
        <RestaurantsList
          title="Big Spender"
          restaurants={filterRestaurantsByPrice('$$$')}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
