const config = require('config');
const request = require('./request');
const getUrl = require('./getUrl');
const slack = config.get('slack');

const getTemplate = task => `
今日のnabeliwoのタスク進捗です。
\`\`\`
■ 達成したタスク -> ${task.doneTask.length}個
${task.doneTask.map(item =>
  `・[ ${item.label} ] ${item.name}`).join('\n')
}\n
■ 残ったタスク -> ${task.remainTask.length}個
${task.remainTask.map(item =>
  `・[ ${item.label} ] ${item.name}`).join('\n')
}\n
■ 進捗率 -> ${Math.floor(task.doneTask.length / task.taskLen * 100)}％
\`\`\`
`;

module.exports = {
  post: task =>  new Promise((resolve, reject) => {
    request({
      url: getUrl.slack,
      method: 'POST',
      data: {
        channel: slack.channel,
        username: slack.username,
        icon_emoji: ':alien:',
        text: getTemplate(task)
      }
    })
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    })
  })
}
