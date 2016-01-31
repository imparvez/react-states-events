/*---- LIST COMPONENT ----*/
//Will render a <li> structure where <a> reside according to bootstrap so that some styling can take place accordingly.

var React = require('react'); //React library doesn't need path

module.exports = React.createClass ({
	render: function() {
		return <li><a>{this.props.item}</a></li>
	}
})