import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email:String!, $password:String! ){
  login(email: $email, password: $password){
    token

    user {
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
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token

    user {
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
}

`;

export const SAVE_BOOK = gql`
mutation saveBook($book: BookData!){
  saveBook(book: $book){
     
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

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!){
  removeBook(bookId: $bookId){
    _id
      username
      email
      savedBooks{
        _id
        bookId
        authors
        description
        title
        image
        link
      }
  }
}
`;
