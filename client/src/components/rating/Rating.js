import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarO } from "@fortawesome/free-regular-svg-icons";

const grayStar = () => {
	return (
		<li>
			<FontAwesomeIcon icon={faStarO} />
		</li>
	);
};

const halfStar = () => {
	return (
		<li>
			<FontAwesomeIcon icon={faStarHalf} />
		</li>
	);
};

const Rating = ({ averageRating }) => {
	const [starFeedback, setStarFeeback] = useState("Bad");

	const starRatingFactory = (starCount) => {
		switch (starCount) {
			case 5:
				setStarFeeback("Excellent");
				return Array(5).map((star) => (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				));
			case 4.5:
				setStarFeeback("VeryGood");
				const fourHalfStars = Array(4).map((star) => (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				));
				return [...fourHalfStars, halfStar()];
			case 4:
				setStarFeeback("AboveAverage");
				const fourStars = Array(4).map((star) => (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				));
				return [...fourStars, grayStar()];
			case 3.5:
				setStarFeeback("Good");
				const threeHalfStars = Array(3).map((star) => (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				));
				return [...threeHalfStars, halfStar()];
			case 3:
				setStarFeeback("Average");
				const threeStars = Array(3).map((star) => (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				));
				return [...threeStars, halfStar()];
			case 2.5:
				setStarFeeback("Fair");
				const twoHalfStars = Array(2).map((star) => (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				));
				return [...twoHalfStars, halfStar()];
			case 2:
				setStarFeeback("BelowAverage");
				const twoStars = Array(2).map((star) => (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				));
				return twoStars;
			case 1.5:
				setStarFeeback("Poor");
				const oneHalfStars = (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				);
				return [oneHalfStars, halfStar()];
			case 1:
				setStarFeeback("Bad");
				const oneStar = (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				);
				return [oneStar];
			default:
				return Array(5).map((star) => (
					<li>
						<FontAwesomeIcon icon={faStar} />
					</li>
				));
		}
	};

	return (
		<div className="stars">
			<ul className="list-inline rating">
				{averageRating && starRatingFactory(averageRating)}
				<li>
					<span className="star-text-right">{starFeedback}</span>
				</li>{" "}
			</ul>
		</div>
	);
};

export default Rating;
