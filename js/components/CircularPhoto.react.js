var React = require('react');

var CircularPhoto = React.createClass({
	render: function() {
		return (
			<div id={this.props.idName + '-container'}>
				<img src={this.props.photoURL}/>
			</div>
		);
	}
});

module.exports = CircularPhoto;