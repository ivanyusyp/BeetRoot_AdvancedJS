import React from "react";

const Course = ({ course, toggle,showTeachers, openId }) => (
	<div className="mt-3">
		<h3>{course.title}</h3>
		<p>{course.anons}</p>
		<button onClick={function () {
			toggle(course._id)
			showTeachers(course.teachers)

		}} className="btn btn-primary">
			{openId === course._id ? "Hide description" : "Show description"}
		</button>
		{openId === course._id ? <p>{course.description}</p> : null}
	</div>
);

export default Course;
