import React from "react";

const RatingItem = (props) => {
	const { className, starText } = props;
	console.log(props);
	if (starText) {
		return (
			<li>
				<span className="star-text-right">{starText}</span>
			</li>
		);
	}
	return (
		<li>
			<i className={className}></i>
		</li>
	);
};

export default RatingItem;
