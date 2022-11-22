## コマンド

1. backendディレクトリに移動
```
cd backend
```

2. graphql起動
```
cargo run --bin graphql-server
```

3. graphQL（簡易クライアント）アクセス　※ブラウザでアクセス
```
http://127.0.0.1:8080/graphiql
```

・サンプルを実行すると、結果が表示される（get版）
```
query {
  human( id: "0") {
    id,
    message
  }
}
```

・サンプルを実行すると、結果が表示される（post版）
```
mutation  {
  createHello(newHello: {message: "yeeeeeeeeah" } )  {
    id,
    message
  }
}
```