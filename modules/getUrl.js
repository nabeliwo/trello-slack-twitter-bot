const config = require('config');
const trello = config.get('trello');
const slack = config.get('slack');

module.exports = {
  trello: {
    should: `https://trello.com/1/lists/${trello.board.list.should}/cards?key=${trello.key}&token=${trello.token}`,
    done: `https://trello.com/1/lists/${trello.board.list.done}/cards?key=${trello.key}&token=${trello.token}`,
    cards: cardId => `https://trello.com/1/cards/${cardId}?key=${trello.key}&token=${trello.token}`
  },
  slack: `https://hooks.slack.com/services/${slack.service}`
};
