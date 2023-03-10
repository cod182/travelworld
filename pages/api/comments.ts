/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

import { GraphQLClient, gql } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_CMS_ENDPOINT;

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlApi, {
    headers: { authorization: `bearer ${process.env.GRAPHCMS_TOKEN}` },
  });

  const query = gql`
  mutation CreateComment($name:string!, $email:string!, $comment, string!, $slug:string!){
    createComment(data:name:$name, email:$email, comment:$comment, post:{connect: {slug:$slug}})
  }
  `;

  const result = await graphqlClient.request(query, req.body);

  return res.status(200).send(result);
}
