var React = require('react');
var CircularPhoto = require('./components/CircularPhoto.react');
var AppConstants = require('./constants/AppConstants');
var CircularHeader = require('./components/CircularHeader.react');
var MainPage= require('./components/MainPage.react')

// React.render(
// 		<CircularPhoto idName='main-photo' photoURL={AppConstants.nathanielPhotoURL}/>,
// 		document.getElementById('app-body')
// );

React.render(
		<MainPage/>,
		document.getElementById('app-body')
);
