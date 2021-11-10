import React from 'react';

class Helpfulness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClick: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  Thanks() {
    return (
      <p>Thank you for rating! Yes ({this.props.review.helpfulness}) No</p>
    );
  }

  Help() {
    return (
      <p>
        Was this review helpful?
        <button className="helpfulbutton" onClick={this.clickHandler} >
          {" "}Yes{" "}
        </button>
        ({this.props.review.helpfulness})
        <button className="helpfulbutton" onClick={this.clickHandler} >
          {" "}No{" "}
        </button>
      </p>
    );
  }

  clickHandler(event) {
    this.setState({ helpfulClick: true });
    this.props.helpfulButton(event, this.props.review.review_id);
  }

  render() {
    return (
      <div>
        {this.state.helpfulClick ? this.Thanks() : this.Help()}
      </div>
    );
  };
}

export default Helpfulness;
