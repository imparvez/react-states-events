//We are using React in this file, so we have to require 'react' js
var React = require('react'); //React library doesn't need path
var Dropdown = require('./dropdown'); //File which we have written need a path


/*--- Place kick off the start of our application ---*/


//options = { thumbnailData: [{}, {}, {}, {}]
	var options = {
		title: 'Choose a desert',
		items: [
			'Apple Pie',
			'Peach cocunut',
			'Cocunut cream pie',
		]
	};

//Step:3 => Now Options object is avaiable inside the Badge componenet
var element = React.createElement(Dropdown, options);

//Inserting Badge component inside element having target class
React.render(element, document.querySelector('.target'));