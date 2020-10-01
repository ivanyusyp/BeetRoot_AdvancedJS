import React from "react";
import { compose } from 'recompose';
import Course from "./Course";
import withToggleId from "../../hoc/withToggleId";
import withTeachers from "../../hoc/withTeachers";

const CoursesList = ({ courses, ...rest }) => {
	return (
		<div>
			{courses.map(course => (
				<Course key={course._id} course={course} {...rest} />
			))}
		</div>
	);
};

const enhance = compose(
	withToggleId,
	withTeachers
)
export default enhance(CoursesList);
