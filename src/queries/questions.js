import { gql } from 'apollo-boost';

export const getQuestionsQuery = gql`
  {
      questions{
        id,
        title,
        answer,
        body
      }
    
  }
`;

export const getQuestionQuery = gql`
  query($id: String){
    question(id: $id){
      id,
      title,
      answer,
      body
    }
  }
`;

export const addQuestionMutation = gql`
  mutation AddQuestion($title: String!, $answer: String!, $body: String!){
        addQuestion(title: $title, answer: $answer, body: $body){
          id  
          title
          answer
          body
            
        }
    }
`;
