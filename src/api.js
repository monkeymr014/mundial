import axios from 'axios';

var config = {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgzYTgzNmY5YzMyYjNmNjNkZGRiYWYiLCJpYXQiOjE2Njk1NzI2NjQsImV4cCI6MTY2OTY1OTA2NH0.nESDINsHsToziO6NynjtvgDje-VFnNjm99Fxr8gOQn4',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};

var url = '/api/v1/';

export function getMatchInfo(endpoint) {
  return axios.get(url + endpoint, config);
}