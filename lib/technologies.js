import { getApolloClient } from "./apollo-client";
import { QUERY_ALL_TECHNOLOGIES } from "../graphql/technolgies.queries";

export async function getAllTechnologies() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_TECHNOLOGIES,
  });

  const posts = data?.data?.technologies?.data;

  return posts;
}

export function getTechByType(technologies, type) {
  return technologies.filter((tech) => tech?.attributes?.title === type);
}
