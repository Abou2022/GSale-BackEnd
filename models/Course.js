const { Schema, model } = require('mongoose');

// Schema to create a course model
const courseSchema = new Schema(
	{
		courseName: {
			type: String,
			required: true,
		},
		inPerson: {
			type: Boolean,
			default: true,
		},
		startDate: {
			type: Date,
			default: Date.now(),
		},
		endDate: {
			type: Date,
			// Sets a default value of 12 weeks from now
			default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
		},
		students: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Student',
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

const Course = model('course', courseSchema);

module.exports = Course;