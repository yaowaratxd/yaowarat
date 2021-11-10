import React from 'react';

// const Helpfulness = (props) => {
//   console.log('This is the current review', props.review);
//   if (props.helpfulClick === true) {
//     return (
//       <p>Thank you for rating! Yes ({props.review.helpfulness}) No</p>
//     );
//   }
//   return (
//     <p>
//       Was this review helpful?
//       <button className="helpfulbutton" onClick={props.helpfulButton} >
//         {" "}Yes{" "}
//       </button>
//       ({props.review.helpfulness})
//       <button className="helpfulbutton" onClick={props.helpfulButton} >
//         {" "}No{" "}
//       </button>
//     </p>
//   );
// };


class Helpfulness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulClick: false,
      thanks: <p>Thank you for rating! Yes ({props.review.helpfulness}) No</p>;
      help: <p>
        Was this review helpful?
        <button className="helpfulbutton" onClick={props.helpfulButton} >
          {" "}Yes{" "}
        </button>
        ({props.review.helpfulness})
        <button className="helpfulbutton" onClick={props.helpfulButton} >
          {" "}No{" "}
        </button>
      </p>;
    };
  }

  render() {
    return (
      <div>
        {this.state.helpfulClick ? this.state.thanks : this.state.help}
      </div>
    );
  };
}

// Note: When either button is clicked both should be disabled and the results should be saved

export default Helpfulness;
