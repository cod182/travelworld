import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_CMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
  query Assets {
    postsConnection {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excert
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
query getPostDetails() {
  posts(
    orderBy: createdAt_ARC
    last:3
    ){
      title
      featuredImage:{
        url
      }
      createdAt
      slug
    }
}

  }`

  const result = await request(graphqlAPI, query)

  return result.posts;
}