import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql`
  query AllPosts {
    posts {
      data {
        id
        attributes {
          createdAt
          publishedAt
          updatedAt
          title
          date
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }
          content
          seoTitle
          description
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query Posts($slug: String!) {
    findSlug(modelName: "post", slug: $slug) {
      ... on PostEntityResponse {
        data {
          id
          attributes {
            createdAt
            publishedAt
            updatedAt
            title
            date
            slug
            cover {
              data {
                attributes {
                  url
                }
              }
            }
            content
            seoTitle
            description
          }
        }
      }
    }
  }
`;
