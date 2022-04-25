import { getApolloClient } from "./apollo-client";

import { QUERY_ALL_POSTS, QUERY_POST_BY_SLUG } from "../graphql/posts";

export async function getAllPosts() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_POSTS,
  });

  const posts = data?.data?.posts?.data;

  return posts;
}

export async function getPostBySlug(slug) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_POST_BY_SLUG,
    variables: {
      slug,
    },
  });

  const post = data?.data?.findSlug?.data;

  return post;
}