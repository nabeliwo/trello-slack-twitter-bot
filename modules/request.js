const axios = require('axios');

module.exports = reqObj => {
  return new Promise((resolve, reject) => {
    axios(reqObj)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
}
