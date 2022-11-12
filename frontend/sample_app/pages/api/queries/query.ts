import { gql } from "@apollo/client";

  export const CATS_LIST = gql`
    query {
      getCats{
        id
        name
      }
    }
  `;