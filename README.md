# trello-slack-twitter-bot

Trelloの特定のボードの中から2つのリスト(今日やるべきこと・今日やったこと)を選んで、決まった周期でその中身を確認して、結果をslackに通知しつつTwitterに投稿してくれるBOTです。

## 設定ファイル

`./config` の中に`production.json` を作成して、以下の内容を記述します。

```
{
  "trello": {
    "key": "[TrelloのAPIKey]",
    "token": "[TreloのToken]",
    "board": {
      "id": "[Trelloの使用するボードのID]",
      "list": {
        "should": "[Trelloの使用するリストのtodayのID]",
        "done": "[Trelloの使用するリストのdoneのID]"
      }
    }
  },
  "slack": {
    "service": "[SlackのWebHook用のURLのうちの、https://hooks.slack.com/services/<ここの部分>]",
    "channel": "#[Slackで投稿したいチャンネル名]",
    "username": "[Slackで投稿したいユーザー名]"
  },
  "twitter": {
    "apikey": "[TwitterのAPIKey]",
    "apisecret": "[TwitterのAPI secret]",
    "accesstoken": "[TwitterのAccessToken]",
    "accesstokensecret": "[TwitterのAccessToken secret]"
  },
  "cron": {
    "time": "[処理を実行する時間。詳しくは、node-cronの時間の部分]"
  }
}

```
