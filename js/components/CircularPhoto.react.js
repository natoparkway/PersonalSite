var React = require('react');

var CircularPhoto = React.createClass({
	render: function() {
		var photoBackground = {
			background: this.props.photoURL + ' no repeat;'
		}

		return (
			<div className='main-photo' style={photoBackground}></div>
		);
	}
});

IssueHeader = React.createClass({
	render: function() {
		var issue = this.props.issue;
		var user = issue.user;

		return (
			<div className="issue-header"> 
				<img className="user-avatar" src={user.avatar_url}/>
				<span className="issue-info-container">
					<span className="issue-title-text"> {issue.title} </span>
					<IssueLabels labels={issue.labels}/>
				</span>
				
			</div>
		);
	}
});

module.exports = CircularPhoto;