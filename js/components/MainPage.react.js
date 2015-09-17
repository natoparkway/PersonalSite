var React = require('react');
var AppData = require('../data/AppData');
var CircularPhoto = require('./CircularPhoto.react');
var CircularHeader = require('./CircularHeader.react');
var AppConstants = require('../constants/AppConstants');
var Utils = require('../utils/Utils');

var MainPage = React.createClass({
	render: function() {
		var pageIcons = AppData.pageTitles.map(function(title, index) {
			return <CircularHeader index={index} key={index} text={title} color={"#FF0000"}/>
		});


		return (
			<div id={"main-page-container"}>
				<CircularPhoto idName='main-photo' photoURL={AppConstants.nathanielPhotoURL}/>
				{pageIcons}
			</div>
		);
	}


});

module.exports = MainPage;