import axios from 'axios';

// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://for-future-reference.herokuapp.com/api';
// const API_KEY = 'ffrapi';

// eslint-disable-next-line import/prefer-default-export
export function createResponse(response, history) {
  axios.post(`${ROOT_URL}/responses`, response).then(() => {
    history.push('/sent');
    console.log('success');
  }).catch((error) => {
    console.log(error);
  });
}
