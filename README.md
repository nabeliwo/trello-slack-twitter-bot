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

## 始め方

```
$ git clone https://github.com/nabeliwo/trello-slack-twitter-bot.git
$ cd trello-slack-twitter-bot
$ npm install
```

ここで `./config` に設定ファイルをおきます。

```
$ npm start // start forever task.
```

foreverを使ってNodeの処理をデーモン化しています。  
停止するには、foreverコマンドを直接叩く必要があるため、 `npm i -g forever` でグローバルインストールをして `forever stop [id]` で停止します。  
[id]の部分は `forever list` を叩くことで確認することができます。
