import React, { Children } from "react";

const Rating = ({ children, averageRating, isLoading }) => {
	const arrayChildren = Children.toArray(children);

	return (
		<div className="stars">
			<ul className={`list-inline rating ${isLoading ? "skeleton" : ""}`}>
				{averageRating === 5 &&
					Children.map(arrayChildren, (child, idx) => {
						const lastChild = arrayChildren.length - 1;
						if (lastChild === idx)
							return React.cloneElement(child, {
								starText: "Excellent"
							});
						return React.cloneElement(child, {
							className: "fa fa-star"
						});
					})}
				{averageRating === 4.5 &&
					Children.map(arrayChildren, (child, idx) => {
						const lastChild = arrayChildren.length - 1;
						const halfStarIdx = arrayChildren.length - 2;
						if (lastChild === idx)
							return React.cloneElement(child, {
								starText: "Very Good"
							});
						if (halfStarIdx === idx) {
							return React.cloneElement(child, {
								className: "fa fa-star-half"
							});
						}
						return React.cloneElement(child, {
							className: "fa fa-star"
						});
					})}
				{averageRating === 4 &&
					Children.map(arrayChildren, (child, idx) => {
						const lastChild = arrayChildren.length - 1;
						const emptyStarIdx = arrayChildren.length - 2;
						if (lastChild === idx)
							return React.cloneElement(child, {
								starText: "Very Good"
							});
						if (emptyStarIdx === idx) {
							return React.cloneElement(child, {
								className: "fa fa-star-o"
							});
						}
						return React.cloneElement(child, {
							className: "fa fa-star"
						});
					})}
				{averageRating === 3.5 &&
					Children.map(arrayChildren, (child, idx) => {
						const lastChild = arrayChildren.length - 1;
						const emptyStarIdx = arrayChildren.length - 2;
						const halfStarIdx = arrayChildren.length - 3;

						if (lastChild === idx)
							return React.cloneElement(child, {
								starText: "Very Good"
							});
						if (emptyStarIdx === idx) {
							return React.cloneElement(child, {
								className: "fa fa-star-o"
							});
						}
						if (halfStarIdx === idx) {
							return React.cloneElement(child, {
								className: "fa fa-star-half"
							});
						}
						return React.cloneElement(child, {
							className: "fa fa-star"
						});
					})}
			</ul>
		</div>
	);
};
export default Rating;
