var React = require('react');
var {Link} = require('react-router');

// var Example = React.createClass({
//     render: function () {
//         return (
//             <h3>Example components</h3>
//         );
//     }
// });


var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Example;