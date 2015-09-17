var React = require('react');
var AppData = require('../data/AppData');
var Utils = require('../utils/Utils');

var CircularHeader = React.createClass({
	getInitialState: function() {
		return {
			framesPassed: 0
		};
	},

	_updateDimensions: function() {
		var framesPassed = this.state.framesPassed;
		var angularSeparation = 360 / AppData.pageTitles.length;
		var innerCircleRadius = 150;
		var height = $(document).height();
		var width = $(document).width();
		var offSetToInner = 100;
		var iconRadius = 150;

		console.log(width, height);

		var theta = angularSeparation * this.props.index + framesPassed / 2;
		var r = innerCircleRadius + offSetToInner;	//Radius of the circle containing the CircularHeaders
		var y = height / 2 + r * Math.sin(Utils.degToRadian(theta));
		var x = width / 2 + r * Math.cos(Utils.degToRadian(theta));

		this.setState({
			coords: {
				top: (y - iconRadius / 2).toString() + 'px',
				left: (x - iconRadius / 2).toString() + 'px'
			}
		});
	},

	_animate: function() {
		this.setState({
			framesPassed: this.state.framesPassed + 1
		});

		this._updateDimensions();
	},

	componentWillMount: function() {
        this._updateDimensions();
        this.interval = setInterval(this._animate, 20);
    },
    
    componentDidMount: function() {
        $(document).resize(this._updateDimensions);
    },

    componentWillUnmount: function() {
        $(document).off();
    },

	render: function() {
		var style = {
			backgroundColor: this.props.color,
			top: this.state.coords.top,
			left: this.state.coords.left
		};

		return (
			<div className='circular-header' style={style}>
				<span>
					{this.props.text}
				</span>
			</div>
		);
	}
});


module.exports = CircularHeader;