import { getApolloClient } from "./apollo-client";
import { QUERY_ALL_RECOMMENDED_BLOGS } from "../graphql/recommendedBlogs.queries";

export async function getAllRecommendedBlogs() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_RECOMMENDED_BLOGS,
  });

  const posts = data?.data?.recommendeds?.data;

  return posts;
}
