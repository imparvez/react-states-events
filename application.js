/*--- Place kick off the start of our application ---*/


//options = { thumbnailData: [{}, {}, {}, {}]
	var options = {
		thumbnailData: [{
			imageUrl : 'http://formatjs.io/img/react.svg',
			header: 'Part One Tutorial',
			descriptions: 'React is the JavaScript framework',
			title: 'Learn Intro',
			number: 5
		},{
			imageUrl : 'http://formatjs.io/img/react.svg',
			header: 'Part Two Tutorial',
			descriptions: 'React is the JavaScript framework',
			title: 'Learn Components',
			number: 5
		},{
			imageUrl : 'http://formatjs.io/img/react.svg',
			header: 'Part Three Tutorial',
			descriptions: 'React is the JavaScript framework',
			title: 'Learn Views',
			number: 5
		}]
	};
//Step:3 => Now Options object is avaiable inside the Badge componenet
var element = React.createElement(ThumbnailList, options);

//Inserting Badge component inside element having target class
React.render(element, document.querySelector('.target'));
//Step:1 => All the dynamically placed component should be replaced by curly braces
var Badge = React.createClass({displayName: "Badge",
	render: function() {
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
		  this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
		)
	}
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function() {
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});

	return React.createElement("div", null, list)
	}
})
//{...thumbnailProps} => React have a shortcut to pass an entire objects and not to worry about picking individual objects
/*this.props.thumbnailData => 
	[{
		imageUrl : 'http://formatjs.io/img/react.svg',
		header: 'Part One Tutorial',
		descriptions: 'React is the JavaScript framework',
		title: 'Learn Intro',
		number: 5
	},{
		imageUrl : 'http://formatjs.io/img/react.svg',
		header: 'Part Two Tutorial',
		descriptions: 'React is the JavaScript framework',
		title: 'Learn Components',
		number: 5
	},{
		imageUrl : 'http://formatjs.io/img/react.svg',
		header: 'Part Three Tutorial',
		descriptions: 'React is the JavaScript framework',
		title: 'Learn Views',
		number: 5
	}]
*/
var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function() {
		return  React.createElement("div", {className: "thumbnail"}, 
	      React.createElement("img", {src: this.props.imageUrl}), 
	      React.createElement("div", {className: "caption"}, 
	        React.createElement("h3", null, this.props.header), 
	        React.createElement("p", null, this.props.descriptions), 
	        React.createElement("p", null, 
	        	React.createElement(Badge, {title: this.props.title, number: this.props.number})
	        )
	      )
	    )
	}
});