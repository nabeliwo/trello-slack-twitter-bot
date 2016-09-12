const getUrl = require('./getUrl');
const request = require('./request');

class Trello {
  fetch(url) {
    return new Promise((resolve, reject) => {
      request({
        url,
        method: 'GET'
      })
      .then(cards => {
        const data = cards.map(card => ({
          id: card.id,
          name: card.name,
          label: card.labels.map(label => label.name).join(' ')
        }));

        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  delete(doneTask) {
    return new Promise((resolve, reject) => {
      Promise.all(doneTask.map(task => this._executeDelete(task)))
      .then(res => {
        resolve();
      })
      .catch(err => {
        reject({ message: err.message });
      })
    });
  }

  _executeDelete(task) {
    return new Promise((resolve, reject) => {
      request({
        url: getUrl.trello.cards(task.id),
        method: 'DELETE'
      })
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}

module.exports = new Trello();
