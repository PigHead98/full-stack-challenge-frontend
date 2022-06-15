import { gql } from "@apollo/client";

export const getAll = () => {
  const query = gql`
    query {
      getAll {
        time
        uuid
        value
      }
    }
  `;
  return query;
};
