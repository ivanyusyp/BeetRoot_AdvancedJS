import React, { Component } from 'react';

export default Component =>
	class WithTeachers extends React.Component {
		showTeachers = teachers =>
			teachers.map(teacher => (
				<p key={teacher._id}>{teacher.name}</p>
			)
			)
		render() {
			return <Component {...this.props} {...this.state} showTeachers={this.showTeachers} />;
		}
	};