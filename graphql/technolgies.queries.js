import { gql } from "@apollo/client";

export const QUERY_ALL_TECHNOLOGIES = gql`
  query AllTechnologies {
    technologies {
      data {
        id
        attributes {
          title
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
