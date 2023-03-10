import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_CMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
query Assets {
  assets {
    createdAt
    id
    publishedAt
    fileName
    url
    updatedAt
  }
  postsConnection {
    edges {
      node {
        author {
          bio
          name
          id
        }
        createdAt
        slug
        title
        excert
        categories {
          name
          slug
        }
      }
    }
  }
}
`

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges;
}