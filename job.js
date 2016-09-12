const config = require('config');
const CronJob = require('cron').CronJob;
const app = require('./modules/app');
const job = new CronJob({
  cronTime: config.cron.time,
  onTick: app,
  start: false,
  timeZone: 'Asia/Tokyo'
});

job.start();
