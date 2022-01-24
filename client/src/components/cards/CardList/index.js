import React, { Fragment } from "react";

const CardList = ({ data, resourceName, itemComponent: ItemComponent }) => {
	return (
		<Fragment>
			{data.map((card) => (
				<ItemComponent key={card.id} {...{ [resourceName]: card }} />
			))}
		</Fragment>
	);
};

export default CardList;
