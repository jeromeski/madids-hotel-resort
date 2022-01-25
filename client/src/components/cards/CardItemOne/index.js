import React, { Fragment, useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

import img1 from "../../../assets/images/rooms/430x300/card-room-430x430-0.jpg";
import img2 from "../../../assets/images/avatars/card-host-150x150-0.jpg";

import Rating from "../../rating/Rating";
import RatingItem from "../../rating/RatingItem";

const CardItemOne = ({ card }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const {
		// id,
		title,
		address,
		imgUrl,
		bedrooms,
		baths,
		guests,
		isFeatured,
		price,
		hostedBy,
		averageRating
	} = card;

	return (
		<div className="item-wrap infobox_trigger homey-matchHeight" data-id={346}>
			<div className="media property-item">
				<div className="media-left">
					<div className="item-media item-media-thumb">
						<span className={`label-wrap top-left ${isLoading ? "hide" : ""}`}>
							<span className="label label-success label-featured">{isFeatured && "Featured"}</span>
						</span>
						<a
							className={`hover-effect ${isLoading ? "skeleton" : ""}`}
							href="https://demo01.gethomey.io/listing/beautiful-cove/">
							<img height={300} width={450} src={img1} className={`img-responsive`} alt="" />{" "}
						</a>
						<div className="item-media-price">
							<span className={`item-price ${isLoading ? "hide" : ""}`}>
								<sup>$</sup>
								{price}
								<sub>/night</sub>
							</span>
						</div>
						<div className={`item-user-image ${isLoading ? "hide" : ""}`}>
							<img width={36} height={36} src={img2} className="img-responsive img-circle" alt="" />{" "}
						</div>
					</div>
				</div>
				<div className="media-body item-body clearfix">
					<div className="item-title-head table-block">
						<div className="title-head-left">
							<h2 className="title">
								<a
									className={`item-amenitie ${isLoading ? "skeleton" : ""}`}
									href="https://demo01.gethomey.io/listing/beautiful-cove/">
									{title}
								</a>
							</h2>
							<address className={`item-address ${isLoading ? "skeleton" : ""}`}>{address}</address>{" "}
						</div>
					</div>
					<ul className={`item-amenities ${isLoading ? "skeleton" : ""}`}>
						<li>
							<i className="fa fa-bed" /> <span className="total-beds">{bedrooms}</span>{" "}
							<span className="item-label">Bedrooms</span>
						</li>
						<li>
							<i className="fa fa-shower" /> <span className="total-baths">{baths}</span>{" "}
							<span className="item-label">Baths</span>
						</li>
						<li>
							<i className="fa fa-user" /> <span className="total-guests">{guests}</span>{" "}
							<span className="item-label">Guests</span>
						</li>
						<li className="item-type">Bed &amp; Breakfast</li>
					</ul>
					<div className={`item-user-image list-item-hidden ${isLoading ? "hide" : ""}`}>
						<img width={36} height={36} src={img2} className="img-responsive img-circle" alt="" />{" "}
						<span className="item-user-info">
							Hosted by
							<br />
							{hostedBy.name}
						</span>
					</div>
					<div className="item-footer">
						<div className="footer-right">
							<div className="item-tools">
								<div className={`btn-group dropup ${isOpen ? "open" : ""}`}>
									<button
										className={`btn-item-tools dropdown-toggle ${isLoading ? "hidden" : ""}`}
										type="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
										onClick={() => setIsOpen((prev) => !prev)}>
										<i className="fa fa-ellipsis-v" aria-hidden="true" />
									</button>
									<ul className="dropdown-menu">
										<li>
											<a className="homey_compare compare-346" href="#!" data-listing_id={346}>
												Compare
											</a>
										</li>
										<li>
											<a href="#!" className="add_fav" data-listid={346}>
												Add to Favorite{" "}
											</a>
										</li>
									</ul>{" "}
								</div>
							</div>
						</div>
						<div className="footer-left">
							<Rating averageRating={averageRating} isLoading={isLoading}>
								<RatingItem />
								<RatingItem />
								<RatingItem />
								<RatingItem />
								<RatingItem />
								<RatingItem />
							</Rating>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardItemOne;

// <Rating averageRating={averageRating} />
