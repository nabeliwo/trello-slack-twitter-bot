const getUrl = require('./getUrl');
const trello = require('./trello');
const slack = require('./slack');
const twitter = require('./twitter');
const fs = require('fs');
const moment = require('moment');

module.exports = () => {
  Promise.all([
    trello.fetch(getUrl.trello.should),
    trello.fetch(getUrl.trello.done),
  ])
  .then(res => {
    const [remainTask, doneTask] = res;
    const taskLen = remainTask.length + doneTask.length;
    const task = { remainTask, doneTask, taskLen };

    return Promise.all([
      slack.post(task),
      twitter.tweet(task),
      doneTask
    ]);
  })
  .then(res => trello.delete(res[2]))
  .catch(err => {
    const text = `[${moment().format('YYYY-MM-DD HH:mm:ss')}] [error] system - ${err.message}\n`;
    fs.appendFile('logs/error.log', text);
  });
};
