import React, { Fragment } from "react";

const CardList = ({ data, resourceName, itemComponent: ItemComponent, isLoading }) => {
	return (
		<Fragment>
			{data &&
				data
					.slice(0, 3)
					.map((card) => (
						<ItemComponent key={card._id} {...{ [resourceName]: card }} isLoading={isLoading} />
					))}
		</Fragment>
	);
};

export default CardList;
