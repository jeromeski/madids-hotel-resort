import React, { Fragment, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faShower, faUser, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import Rating from "../../rating/Rating";

const CardItemOne = ({ card }) => {
	const [isOpen, setIsOpen] = useState(false);
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

	console.log(isOpen);
	return (
		<Fragment>
			<div className="item-wrap">
				<div className="media property-item">
					<div className="media-left">
						<div className="item-media item-media-thumb">
							<span className="label-wrap top-left">
								<span className="label label-success label-featured">
									{isFeatured ? "Featured" : ""}
								</span>
							</span>
							<a className="hover-effect" href="#!">
								<img
									width={450}
									height={300}
									src={imgUrl}
									className="img-responsive wp-post-image"
									alt=""
									loading="lazy"
								/>{" "}
							</a>
							<div className="item-media-price">
								<span className="item-price">
									<sup>$</sup>
									{price}
									<sub>/night</sub>
								</span>
							</div>
							<div className="item-user-image">
								<img
									width={36}
									height={36}
									src={hostedBy.imgUrl}
									className="img-responsive img-circle"
									alt=""
								/>{" "}
							</div>
						</div>
					</div>
					<div className="media-body item-body clearfix">
						<div className="item-title-head table-block">
							<div className="title-head-left">
								<h2 className="title">
									<a href="#!">{title}</a>
								</h2>
								<address className="item-address">{address}</address>{" "}
							</div>
						</div>
						<ul className="item-amenities">
							<li>
								<FontAwesomeIcon icon={faBed} /> <span className="total-beds">{bedrooms}</span>{" "}
								<span className="item-label">Bedrooms</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faShower} /> <span className="total-baths">{baths}</span>{" "}
								<span className="item-label">Baths</span>
							</li>
							<li>
								<FontAwesomeIcon icon={faUser} /> <span className="total-guests">{guests}</span>{" "}
								<span className="item-label">Guests</span>
							</li>
							<li className="item-type">Bed &amp; Breakfast</li>
						</ul>
						<div className="item-user-image list-item-hidden">
							<img
								width={36}
								height={36}
								src={hostedBy.imgUrl}
								className="img-responsive img-circle"
								alt=""
							/>{" "}
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
											className="btn-item-tools dropdown-toggle"
											type="button"
											onClick={() => setIsOpen((prev) => !prev)}>
											<FontAwesomeIcon icon={faEllipsisV} />
										</button>
										<ul className="dropdown-menu">
											<li>
												<a className="homey_compare compare-346" href data-listing_id={346}>
													Compare
												</a>
											</li>
											<li>
												<a href className="add_fav" data-listid={346}>
													Add to Favorite{" "}
												</a>
											</li>
										</ul>{" "}
									</div>
								</div>
							</div>
							<div className="footer-left">
								<Rating averageRating={averageRating} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default CardItemOne;
