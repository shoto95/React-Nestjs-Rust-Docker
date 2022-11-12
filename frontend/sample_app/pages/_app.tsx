import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

//GraphQLのURL(エンドポイント)にする
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
//ApolloProviderで囲むとその範囲でGraphQLが使えるようになる
return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
);
}
