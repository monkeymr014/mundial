import axios from 'axios';

var config = {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg2NGJmM2ZhNzhmOWNkZjQ5NDFmZDgiLCJpYXQiOjE2Njk3NDU2NTIsImV4cCI6MTY2OTgzMjA1Mn0.YLLSvHSOZQsDInSyzrEy0yliJKYt8TwOLvFhIL8kHZI',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};

var url = '/api/v1/';

export function getMatchInfo(endpoint) {
  return axios.get(url + endpoint, config);
}