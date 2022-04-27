import { gql } from "@apollo/client";

export const QUERY_ALL_RECOMMENDED_BLOGS = gql`
  query AllRecommendedBlogs {
    recommendeds {
      data {
        id
        attributes {
          title
          description
          url
        }
      }
    }
  }
`;
