/*---- Place where we render our button and list. Contains logic too of whether or not list should be open or not.----*/
//We are using React in this file, so we have to require 'react' js
/*--- 
className="btn-default" ==> Applying class through here only

A] handleClick: function(){
		alert("BUTTON CLICKED");
	}, ====> Reference being given by "whenClicked={this.handleClick}""
---*/
var React = require('react'); //React library doesn't need path
var Button = require('./button');
var ListItem = require('./list-item'); //Included ListItem<li> structure

module.exports = React.createClass({
	handleClick: function(){
		alert("BUTTON CLICKED");
	},
	render: function(){
		var list = this.props.items.map(function(item){
			return <ListItem item = {item} />
		});/*Using map function to bifercate the list item*/
		return <div className="dropdown">
			<Button 
				whenClicked={this.handleClick}
				className="btn-default" 
				title={this.props.title} 
				subTitleClassName="caret" />
			<ul>
				{list}
			</ul>
		</div>
	}
})