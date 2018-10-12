import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addQuestionMutation, getQuestionsQuery } from '../../queries/questions';
import './AddQuestion.css';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.addQuestion = this.addQuestion.bind(this);
  }

  addQuestion(e) {
    e.preventDefault();
    const { addQuestionMutation } = this.props;
    addQuestionMutation({
      variables: {
        title: e.target.title.value,
        answer: e.target.answer.value,
        body: e.target.body.value,
      },
      refetchQueries: [{ query: getQuestionsQuery }],
    });
  }

  renderQuestions() {
    const { questions, loading } = this.props.getQuestionsQuery;
    if (!loading) {
      return questions.map(question => (
        <li className="question" key={question.id}>
          <div className="title">{question.title}</div>
          <div className="body">{question.body}</div>
          <div className="answer">
            THE ANSWER IS:
            {question.answer}
          </div>

        </li>
      ));
    }

    return <div> Loading questions.... </div>;
  }

  render() {
    console.log(this.props);

    return (
      <div>

        <form onSubmit={this.addQuestion}>
          Title:
          <input className="form-input" type="text" name="title" />
          Answer:
          <input className="form-input" type="text" name="answer" />
          Body:
          <input className="form-input" type="text" name="body" />
          <button type="submit"> Add </button>
        </form>
        <ul className="question-list">
          {this.renderQuestions()}
        </ul>

      </div>
    );
  }
}

export default compose(
  graphql(getQuestionsQuery, { name: 'getQuestionsQuery' }),
  graphql(addQuestionMutation, { name: 'addQuestionMutation' }),
)(AddQuestion);
