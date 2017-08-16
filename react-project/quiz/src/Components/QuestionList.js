import React, { Component } from 'react';
import Question from './Question';

export default class QuestionList extends Component {
    render() {
        return (
            <div className="question">
                {this.props.questions.map(question => {
                    console.log(this.props);
                    if (question.id === this.props.current) {

                        {/*bind from grandchild to grandParent  */ }
                        return <Question question={question} key={question.id} {...this.props} />
                    }
                })}
            </div>
        );
    }
}