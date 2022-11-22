import axios from 'axios';

var config = {
    method: 'GET',
    mode: 'no-cors',
    url: '/api/v1/match',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdjYzUyNTQ4NzA5MjMzZmQ5Yjg0ZTEiLCJpYXQiOjE2NjkxMjEzMTgsImV4cCI6MTY2OTIwNzcxOH0.jPV7rZjhi2U4GlZl1RySKdQsOQhgsAvESjAFjyghabc',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',

  };
export function getMatchInfo() {
    return axios(config);
}