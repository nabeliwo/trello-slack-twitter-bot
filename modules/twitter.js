const config = require('config');
const Twitter = require('twitter');
const twitterConfig = config.get('twitter');
const client = new Twitter({
  consumer_key: twitterConfig.apikey,
  consumer_secret: twitterConfig.apisecret,
  access_token_key: twitterConfig.accesstoken,
  access_token_secret: twitterConfig.accesstokensecret
});

const getTemplate = task => `
【BOT】
今日のnabeliwoのタスク進捗です。
・達成したタスク => ${task.doneTask.length}個
・残ったタスク => ${task.remainTask.length}個
・進捗率 => ${Math.floor(task.doneTask.length / task.taskLen * 100)}％
#trello_slack_twitter_bot https://github.com/nabeliwo/trello-slack-twitter-bot
`;

module.exports = {
  tweet: task => new Promise((resolve, reject) => {
    client.post('statuses/update', { status: getTemplate(task) },  (err, tweet, res) => {
      if (err) {
        reject({ message: err[0].message });
      }

      resolve();
    });
  })
};
