const {
  GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt,
  GraphQLObjectType, GraphQLNonNull,
} = require('graphql');

const QuestionCollection = require('./db/models/question');


// Types
const QuestionType = new GraphQLObjectType({
  name: 'Question',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    answer: { type: GraphQLString },
    body: { type: GraphQLString },
  }),
});

// Mutations

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addQuestion: {
      type: QuestionType,
      args: {
        id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        answer: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const question = new QuestionCollection({
          title: args.title,
          answer: args.answer,
          body: args.body,
        });
        return question.save();
      },
    },
  },
});


// RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    question: {
      type: QuestionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return QuestionCollection.findById(args.id);
      },
    },
    questions: {
      type: new GraphQLList(QuestionType),
      resolve(parent, args) {
        return QuestionCollection.find({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
