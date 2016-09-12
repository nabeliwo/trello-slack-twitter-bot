const CronJob = require('cron').CronJob;
const app = require('./modules/app');
const job = new CronJob({
  cronTime: '00 07 00 * * *',
  onTick: app,
  start: false,
  timeZone: 'Asia/Tokyo'
});

job.start();
