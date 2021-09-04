import {gql }from '@apollo/client';

export const GET_ME = gql`

query {
    me{
       _id
        username
        email
        savedBooks{
          _id
          authors
          description
          title
          image
          link
        }
    }
  }
`;