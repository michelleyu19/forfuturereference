import axios from 'axios';

// const ROOT_URL = 'http://localhost:9090/api';
const ROOT_URL = 'https://for-future-reference.herokuapp.com/api';
// const API_KEY = 'ffrapi';

// keys for actiontypes
export const ActionTypes = {
  CREATE_RESPONSE: 'CREATE_RESPONSE',
};

export function createResponse(response, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/responses`, response).then(() => {
      history.push('/');
      console.log('success');
    }).catch((error) => {
      console.log(error);
    });
  };
}
