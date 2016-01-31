/*---- Badge Component----*/
//We are using React in this file, so we have to require 'react' js
var React = require('react'); //React library doesn't need path

//Step:1 => All the dynamically placed component should be replaced by curly braces
//Which function needs to be exported(Making it available to other file)

/*--- 
className={"btn "+ this.props.className} ===>Class is made conditional or u can say more dyanmic so that it can be pass like a property from a COMPONENT

B] When button get clicked onCLick will call function this.props.whenClicked which is pointing back to dropdown handleClick
onClick={this.props.whenClicked} 
---*/
module.exports = React.createClass({
	render: function() {
		return <button onClick={this.props.whenClicked} className={"btn "+ this.props.className} type="button">
		  {this.props.title}
		  <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
		</button>
	}
});