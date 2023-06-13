import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const searchApi = async keyword => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: keyword,
          location: 'san jose',
          limit: 50,
        },
      });
      setRestaurants(response.data.businesses);
      setErrorMessage(null);
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('pasta');
  }, []);
  return [searchApi, restaurants, errorMessage];
};
