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

4. サンプルを実行すると、結果が表示される
```
query {
  human( id: "0") {
    id,
    message
  }
}
```
