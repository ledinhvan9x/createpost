/* eslint-disable default-param-last */
import axios from 'axios';
import Config from 'constants/Config';

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method,
    url: `${Config}/${endpoint}`,
    data: body,
  }).catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err.message);
  });
}
