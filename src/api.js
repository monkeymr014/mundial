import axios from 'axios';

var config = {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg3NTgwN2ZhNzhmOWNkZjRiYTExYWEiLCJpYXQiOjE2Njk4MTQyODAsImV4cCI6MTY2OTkwMDY4MH0.Ynk_qDf0aMRRUa7RKlUMVgYuyu7k-DOHDRO5BZ9UAT8',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};

var url = '/api/v1/';

export function getMatchInfo(endpoint) {
  return axios.get(url + endpoint, config);
}