import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer n7x8X6DOp5_Z73t2bFlpovlNu1WrcOFnybhecmC4gFPeCQ5CyVenKYwCLvKItUHeEHAloN8MvkSYwpqHM7ErgrODDZlagaOwxDbT2NNdy_t8fKNiUklz1Bd6MPaGZHYx',
  },
});
